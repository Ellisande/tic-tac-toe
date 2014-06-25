/* App Module */
var app = angular.module('tic-tac-toe', ['filters','services','directives','ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
            when('/home', {templateUrl: 'templates/home.html',   controller: HomeCtrl}).
            otherwise({redirectTo: '/home'});
}]);
