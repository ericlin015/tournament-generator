var app = angular.module('tournamentApp', [
	'ngRoute',
	'Controllers']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/bracket', {
				templateUrl: '../partials/bracket-page.html',
				controller: 'BracketController'
			}).
			when('/prize', {
				templateUrl: '../partials/prize-page.html',
				controller: 'PrizeController'
			}).
			otherwise({
				redirectTo: '/bracket'
			})
	}]);