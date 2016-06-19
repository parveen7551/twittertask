var app = angular.module('sampleApp', []);
app.controller("twitterCtrl", ['$scope', '$rootScope','$http', 
  function ($scope, $rootScope,$http) {
  	$scope.twitterLogin = true;
    $scope.keyword = "";
    $scope.tweetList = [];
  	$scope.searchKeywords = function(keyword){
      
      $http.get('http://127.0.0.1:3000/twitts/keyword', {
        params: {            
            keyword: keyword
        }
     })
     .success(function (data,status) {          
          $scope.tweetList = data;
          console.log(data);
     });
  	}
 
    $scope.twitterLogin = function(){
        alert("Start");
    	$scope.twitterLogin = false;
    }       
    $scope.getTwitts = function() {

    }
        
}]);
