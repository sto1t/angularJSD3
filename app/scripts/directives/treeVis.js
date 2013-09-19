'use strict';

angular.module('angD3App')
		.directive('treeVis', function() {
			return {
				restrict: 'E',
				link: function($scope, element, attrs) {
					$scope.$watch('treeArray', function(value) {
						nv.addGraph(function() {
							var chart = nv.models.lineChart();
							chart.xAxis
									.axisLabel('Years')
									.tickFormat(d3.format(',r'));
							chart.yAxis
									.axisLabel('Trees')
									.tickFormat(d3.format('.01f'));
							d3.select('#chart svg')
									.datum(formatData())
									.transition().duration(500)
									.call(chart);
							nv.utils.windowResize(function() {
								d3.select('#chart svg').call(chart);
							});
							return chart;
						});

						function formatData() {
							var trees = [];

							/* Pretty simple data bind... but this convention
							 works if you are going to be computing several 
							 lines. */

							for (var i = 0; i < $scope.years; i++) {
								trees.push({x: i, y: $scope.treeArray[i].totalTrees});
							}

							return [
								{
									values: trees,
									key: 'Number of Trees',
									color: '#37651a'
								}
							];
						}
					});
				}
			};
		});
