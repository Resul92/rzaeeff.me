var App=angular.module("rzaeeff",[])

App.controller("RzaeeffController",function($scope){
  $scope.goTo = function(target){
     window.location = "modules/"+target;
  };
})


