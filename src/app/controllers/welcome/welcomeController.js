app.controller('welcomeController', ['$scope', '$stateParams', function($scope, $stateParams){
    var welcome = this;
    welcome.name = $stateParams.username;
}]);