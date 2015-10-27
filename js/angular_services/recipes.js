
var recipeMod = angular.module('recipeService', []);

recipeMod.factory('recipe', ['$http', function($http){
	return{
		getChefs: function(){

			/* Doesn't work locally because cross domain requests are blocked */
			/*$http.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 ')
			.success(function(data, status) {
				console.log('success');
				console.log(data)
			})
			.error(function(data, status) {
				console.log('failure');
			});*/
			
			return "{\"chefs\":[{\"last\":\"Myler\",\"first\":\"Lola\",\"age\":27},{\"last\":\"Leeks\",\"first\":\"Terrance\",\"age\":32},{\"last\":\"Sebesta\",\"first\":\"Adam\",\"age\":12}]}"
		}
	}
}]);