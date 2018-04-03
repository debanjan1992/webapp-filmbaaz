app.directive('navbar', function(){
    return {
        restrict: 'E',
        templateUrl: '../src/app/directives/navbar/navbar.tpl.html',
        controller: 'navbarController',
        controllerAs: 'navbar'
    };
});