app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
    $locationProvider.hashPrefix('').html5Mode(true);
    $stateProvider.state('home', {
        url: '/',
        template: '<h1>You are at home page</h1>'
    }).state('login', {
        url: '/login',
        template: '<h1>You are at login page</h1>'
    }).state('join', {
        url: '/join',
        template: '<h1>You are at the registration page</h1>'
    }).state('otherwise', {
        url: '/error',
        template: '<h1>Wrong route!</h1>'
    });
}]);