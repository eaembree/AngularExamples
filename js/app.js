var myApp = angular.module('myApp', ['paneMod']);

myApp.controller('myCtrl', ['$scope', function($scope){
	$scope.paneDetails = new Object();
	$scope.paneDetails.header = 'myApp Pane Header';
	$scope.paneDetails.body = 'myApp Body';

	$scope.secondPane = new Object();
	$scope.secondPane.header = 'Second Header';
	$scope.secondPane.body = 'Second Body';

	$scope.paneList = new Array();
	for(var i = 0; i < 10; i++){
		var newDetail = new Object();
		newDetail.header = "Header " + i;
		newDetail.body = "Body " + i;
		$scope.paneList.push(newDetail);
	}
}]);