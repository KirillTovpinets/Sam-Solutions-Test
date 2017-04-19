(function(){
	var app = angular.module("addNew", []);
	document.getElementById("published").value = new Date();

	app.controller('addNewCtr', ['$scope', function($scope){
		this.post = {};
		this.post.date = new Date();
		var posts = [];
		window.localStorage.numNewPosts = first;
		this.addNewsToStorage = function(){
			posts.push(this.post);
			console.log(window.localStorage);
			window.localStorage.posts = posts;
			window.localStorage.numNewPosts += 1;
			window.localStorage.hasNew = true;
			console.log(window.localStorage.posts);
			this.post = {};
		}
	}])

	app.controller('CheckNewController', [function(){
		
	}])
})();