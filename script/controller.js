'use strict';

var controllers = angular.module('tournamentCtrl', []);

controllers.controller('HomeCtrl', ['$scope',
	function($scope) {
		console.log("Setting up in home controller");
	}]);

controllers.controller('BracketCtrl', ['$scope',
	function($scope) {
		console.log("Setting up in bracket controller");
		$scope.nameList = [];
		//$scope.inputValue = "";

		$scope.add = function(nameToAdd) {
			$scope.nameList.push(nameToAdd);
			console.log("input value is " + $scope.nameToAdd);
			$scope.nameToAdd = "";
			//console.log("Pushed " + nameToAdd + " to list")
			//console.log("input value after is " + $scope.nameToAdd);
			// for(var i=0; i<$scope.nameList.length; i++){
			// 	console.log("Counter on: " + i + " with value: " + $scope.nameList[i]);
			// }
		}

		$scope.start = function() {
			console.log("Starting!");
			for(var i=0; i<$scope.nameList.length; i++){
				console.log("Counter on: " + i + " with value: " + $scope.nameList[i]);
			}
			//how do you do dis?
		}
	}]);

controllers.controller('PrizeCtrl', ['$scope',
	function($scope) {
		console.log("Setting up in prize controller");

	}]);