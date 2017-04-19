(function(){
	var app = angular.module('List', []);

	app.controller("list-post", ['getHttpList', function(getHttpList){
		var thisController = this;
		thisController.articles = [];
		getHttpList.get().then(function(data){
			thisController.articles = data.data.articles;
		});
	}])
})();