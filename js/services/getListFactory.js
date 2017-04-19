angular.module("List").factory('getHttpList', ['$http', function($http){
	return {
		get: function(){
			var category = document.location.href.split("=")[1];
			return $http.get('https://newsapi.org/v1/articles?apiKey=7275a50daaac460eacd3e67399c4a0a7&source=' + category);
		}
	}
}])