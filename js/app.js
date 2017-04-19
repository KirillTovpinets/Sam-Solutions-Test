(function(){
	var app = angular.module("news", []);

	app.controller('getNews', ['$http', 'getHttpNews', function($http, getHttpNews){
		var collection = this;
		this.sources = [];
		//7275a50daaac460eacd3e67399c4a0a7
		getHttpNews.get().then(function(data){
			collection.sources = data.data.sources;
		});
	}]);
})();