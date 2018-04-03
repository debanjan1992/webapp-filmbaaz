app.controller('joinController', ['$scope', 'userService', function($scope, userService){
    var join = this;
    join.signUp = function() {
        var user = {};
        user.name = join.name;
        user.email = join.email;
        user.password = join.password;
        userService.registerUser(user, function(result){
            if(result.data)
                alert(result.message);
            else
                alert(result.message);
        });
    };
}]);