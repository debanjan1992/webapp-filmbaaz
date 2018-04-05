app.controller('loginController', ['$scope', 'userService', '$state', function ($scope, userService, $state) {
    var vm = this;
    var init = function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    };
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
    init();
}]);