
var paneMod = angular.module('paneMod', []);

paneMod.directive('bsPane', function(){
	return {
		restrict: 'E',
		scope: {
			details: '=details'
		},
		templateUrl: 'angular_templates/pane.html'
	};
});