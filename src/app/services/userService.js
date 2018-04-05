app.service('userService', ['$http', 'apiService', function ($http, apiService) {

    var BASE_URL = "http://localhost:8080/filmbaaz/api";
    this.authenticateUser = function (user, cb) {
        apiService.post(BASE_URL + '/public/login', user, function (result) {
            cb(result.data);
        });
    };

    this.registerUser = function (user, cb) {
        apiService.post(BASE_URL + '/public/register', user, function (result) {
            cb(result.data);
        });
    };

}]);