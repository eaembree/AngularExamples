var myApp = angular.module('myApp', ['paneMod', 'recipeService']);

myApp.controller('myCtrl', ['$scope', 'recipe', function($scope, recipe){
	var result = recipe.getChefs();
	var obj = angular.fromJson(result);
	
	$scope.paneDetails = new Object();
	$scope.paneDetails.header = 'myApp Pane Header';
	$scope.paneDetails.body = 'myApp Body';

	$scope.secondPane = new Object();
	$scope.secondPane.header = 'Second Header';
	$scope.secondPane.body = 'Second Body';

	$scope.paneList = new Array();
	
	obj.chefs.forEach(function (element, index) {
		var newDetail = new Object();
		newDetail.header = element.last + ', ' + element.first;
		newDetail.body = "Age: " + element.age;
		$scope.paneList.push(newDetail);
	});
}]);