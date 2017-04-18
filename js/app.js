(function(){
	var app = angular.module("news", []);

	app.controller('getNews', ['$http', '$log', function($http, $log){
		var collection = this;
		this.sources = [];
		//7275a50daaac460eacd3e67399c4a0a7
		config = {
			apiKey: '7275a50daaac460eacd3e67399c4a0a7'
		}
		$http.get('https://newsapi.org/v1/sources', {language: 'en'}).then(function(data){
			collection.sources = data.data.sources;
			$log.log(collection.sources);
		});

	}])
})();