app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
    $locationProvider.hashPrefix('').html5Mode(true);
}]);