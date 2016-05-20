var myApp = angular.module("myControllerApp", []);

myApp.controller('myController', ['$scope', function($scope){
  /*
  $scope.firstName = "Arvind";
  $scope.lastName = "Nishad";

  $scope.printName = function(){
    return $scope.firstName +" "+ $scope.lastName;
  }
  */

  $scope.username="Welcome";

  $scope.runME = function(){
    $scope.greeting = "Hello "+$scope.username+"!";
  };
}]);
