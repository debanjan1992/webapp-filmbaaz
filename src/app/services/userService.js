app.service("userService", ['$http', '$timeout', function($http, $timeout){

    this.authenticateUser = function(user, cb){
        $timeout($http.get('../src/assets/mocks/users.json').then(function(response){
            var users = response.data;
            var result = {};
            for(i=0;i<users.length;i++){
                var val = users[i];
                if(val.emailID == (user.emailID)){
                    if(val.password ==(user.password)){
                        result.name = val.name;
                        result.emailID = val.emailID;
                        result.token = generateToken(val.password);
                        return cb(result);
                    }
                }
            }
            return cb(null);

        }, function(error){
            alert(error);
        }),3000);
    }

    function generateToken(password){
        return password+"."+(new Date().getTime());
    }

}]);