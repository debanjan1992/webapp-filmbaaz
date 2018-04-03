app.controller('loginController', ['$scope', 'userService', '$state', function ($scope, userService, $state) {
    var vm = this;
    vm.login = function () {
        var user = {};
        user.email = vm.email;
        user.password = vm.password;
        userService.authenticateUser(user, function (result) {
            if (result.success)
                $state.go('welcome', {
                    username: result.user.name
                });
            else
                alert("Invalid Credentials!");
        });
    };
}]);