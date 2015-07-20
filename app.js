angular.module('flapperNews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider,$urlRouterProvider){

$stateProvider
	.state('home',{
		url:'/home',
		templateUrl: '/home.html',
		controller: 'MainCtrl'
	})

$urlRouterProvider.otherwise('home');

}])
.factory('posts',[function(){

var postStore = {
	posts: [{title: 'Hello' , link:'helloworld.org', upvotes:9}]
}

return postStore;
}])
.controller('MainCtrl', [
'$scope','posts',function($scope,posts){
  
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