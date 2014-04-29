'use strict';

var app = angular.module('tournamentApp', [
	'ngRoute',
	'tournamentCtrl']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'HomeCtrl'
			}).
			when('/bracket', {
				templateUrl: 'partials/bracket-page.html',
				controller: 'BracketCtrl'
			}).
			when('/prize', {
				templateUrl: 'partials/prize-page.html',
				controller: 'PrizeCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			})
	}]);

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});