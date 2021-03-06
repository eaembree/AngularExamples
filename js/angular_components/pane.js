
var paneMod = angular.module('paneMod', []);

paneMod.directive('bsPane', function(){
	return {
		restrict: 'E',
		scope: {
			details: '=',
			color: '='
		},
		templateUrl: 'angular_templates/pane.html',
		link: function(scope, element, attrs){
			if(!scope.color){
				scope.color = 'panel-default';
			}
		}
	};
});