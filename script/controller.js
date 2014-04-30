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

		$scope.add = function(nameToAdd) {
			$scope.nameList.push(nameToAdd);
			//console.log("input value is " + $scope.nameToAdd);
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
			$scope.nameList = [];
			//how do you do dis?
		}
	}]).directive('showNames', function() {
		function link1(scope, element, attrs) {
			scope.$watch(attrs.showNames, function(value) {
				if (value.length != 0){
        			element.append("<input type=\"text\" class=\"name-box\" value=\"" + value[value.length-1] + "\" size=\""+ (value[value.length-1].length) +"\">");
        		} else {
        			element.html("");
        		}
      		}, true);
		}
		return {
			link: link1
		}
	});

controllers.controller('PrizeCtrl', ['$scope',
	function($scope) {
		console.log("Setting up in prize controller");

	}]);