app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
    $locationProvider.hashPrefix('').html5Mode(true);
    $stateProvider.state('home', {
        url: '/',
        template: '<navbar></navbar><h1>You are at home page</h1>'
    }).state('login', {
        url: '/login',
        templateUrl: '../src/app/controllers/login/login.tpl.html',
        controller: 'loginController',
        controllerAs: 'login'
    }).state('join', {
        url: '/join',
        templateUrl: '../src/app/controllers/join/join.tpl.html',
        controller: 'joinController',
        controllerAs: 'join'
    }).state('welcome', {
        url: '/welcome',
        templateUrl: '../src/app/controllers/welcome/welcome.tpl.html',
        controller: 'welcomeController',
        controllerAs: 'welcome'
    }).state('**', {
        url: '/error',
        template: '<h1>Wrong route!</h1>'
    });
}]);