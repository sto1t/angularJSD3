'use strict';


angular.module('angD3App').controller('TreeCtrl', function($scope) {
	$scope.params = {};
	$scope.treeArray = [];

	$scope.calculateTrees = function() {

		$scope.calculated = 1;
		var params = angular.copy($scope.params);
		$scope.years = params.years;

		var n = 1;
		$scope.treeArray = [];
		$scope.totalTrees = params.trees;

		while (n <= params.years) {
			var yearStat = {};
			yearStat.year = n;
			yearStat.totalTrees = $scope.totalTrees;
			$scope.totalTrees = $scope.totalTrees + ($scope.totalTrees * 0.30);
			$scope.treeArray.push(yearStat);
			n++;
		}
	};
});
