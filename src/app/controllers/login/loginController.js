app.controller('loginController', ['$scope', 'userService', '$state', function($scope, userService, $state){
    var vm = this;
    vm.login = function(){
        var user = {};
        user.emailID = vm.email;
        user.password = vm.password;
        userService.authenticateUser(user, function(result){
            if(result !=null)
                $state.go('welcome', {
                    username: result.name
                });
            else
                alert("Invalid Credentials");
        });
    };
}]);