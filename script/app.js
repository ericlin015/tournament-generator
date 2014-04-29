'use strict';

var app = angular.module('tournamentApp', [
	'ngRoute',
	'tournamentCtrl']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/bracket', {
				templateUrl: 'partials/bracket-page.html',
				controller: 'BracketCtrl'
			}).
			when('/prize', {
				templateUrl: 'partials/prize-page.html',
				controller: 'PrizeCtrl'
			}).
			otherwise({
				redirectTo: '/bracket'
			})
	}]);