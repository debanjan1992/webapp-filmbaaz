app.service("apiService", ['$http', function ($http) {

    this.post = function (url, body, cb) {
        $http({
            method: 'POST',
            url: url,
            data: body,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            cb(response);
        }, function (error) {
            cb(error);
        })
    };

    this.get = function (url, params, cb) {
        $http({
            method: 'POST',
            url: url,
            params: params
        }).then(function (response) {
            cb(response);
        }, function (error) {
            cb(error);
        })
    };
}]);