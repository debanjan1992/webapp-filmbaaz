app.controller("homeController",['$scope', 'userService', '$state', function($scope, userService, $state){
    var home = this;
    home.login = function () {
        var user = {};
        user.email = home.email;
        user.password = home.password;
        userService.authenticateUser(user, function (result) {
            if (result.success)
                $state.go('welcome', {
                    username: result.user.name
                });
            else
                alert(result.message);
        });
    };
}]);