var myApp = angular.module('myApp', ['paneMod']);

myApp.controller('myCtrl', ['$scope', function($scope){
	$scope.paneDetails = new Object();
	$scope.paneDetails.header = 'myApp Pane Header';
	$scope.paneDetails.body = 'myApp Body';

	$scope.secondPane = new Object();
	$scope.secondPane.header = 'Second Header';
	$scope.secondPane.body = 'Second Body';
}]);