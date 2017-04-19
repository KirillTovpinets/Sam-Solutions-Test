angular.module("news").factory('getHttpNews', ['$http',function getHttpNewsFactory($http){
	return {
		get: function(){
			return $http.get('https://newsapi.org/v1/sources', {language: 'en'});
		}
	}
}])