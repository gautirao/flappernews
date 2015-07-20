var app = angular.module('flapperNews', ['ui-router']);
app.factory('posts',[function(){

var postStore = {
	posts: [{title: 'Hello' , link:'helloworld.org', upvotes:9}]
}

return postStore;
}]);
app.controller('MainCtrl', [
'$scope','posts',
function($scope,posts){
  $scope.test = 'Hello world two!';
  
  $scope.posts = posts.posts;
  
  $scope.addPost = function(){
		if ($scope.title === '') {return;}
		$scope.posts.push({
			title: $scope.title , 
			link:$scope.link,
			upvotes:4
			});
		$scope.title = '';
		$scope.link = '';
  }
  
  $scope.incrementUpvotes = function(post){
			post.upvotes += 1;
  }
}]);