'use strict';

var controllers = angular.module('tournamentCtrl', []);

controllers.controller('HomeCtrl', ['$scope',
	function($scope) {
		console.log("Setting up in home controller");
	}]);

controllers.controller('BracketCtrl', ['$scope',
	function($scope) {
		console.log("Setting up in bracket controller");
		$scope.nameList = ["sup"];
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
	}]).directive('aaa', function() {
		var tmp = "<li>Helllo</li>";
		function link1(scope, element, attrs) {
			scope.$watch(scope.ha, function() {
			    console.log('hey, myVar has changed!');
			});

			console.log("no error");
			element.append(ha[0]);
			console.log(ha.length);
		}
		return {
			scope: {
				ha: '=names'
			},
			link: link1
		}
	});

controllers.controller('PrizeCtrl', ['$scope',
	function($scope) {
		console.log("Setting up in prize controller");

	}]);