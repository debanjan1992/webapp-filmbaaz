app.controller("navbarController", ['$scope', '$state', function ($scope, $state) {
    var navbar = this;
    navbar.signUp = function () {
        $state.go('join');
    };
    navbar.signIn = function () {
        $state.go('login');
    };
}]);