
var myFirstApp = angular.module("myApp", []);

myFirstApp.controller('MyController', function($scope){
  $scope.clock =  {now :new Date();}

  updateClock = function(){
     $scope.clock.now =new Date();
  }

  setInterval(function(){
    $scope.$apply(updateClock);
  },1000);
  updateClock();
});
