(function(){
	var app = angular.module('List', []);

	app.controller("list-post", ['$http', '$log', function($http, $log){
		var thisController = this;
		thisController.articles = [];
		var category = document.location.href.split("=")[1];
		var config = {
			apiKey: '7275a50daaac460eacd3e67399c4a0a7',
			source: category,
			sortBy: 'latest'
		};
		$http.get('https://newsapi.org/v1/articles?apiKey=7275a50daaac460eacd3e67399c4a0a7&source=' + category).then(function(data){
			thisController.articles = data.data.articles;
			//alert(data.articles);
			//$log.log(data);
			//alert(category);
		});
	}])
})();