let myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  "$scope",
  "$timeout",
  "$filter",
  function($scope, $timeout, $filter) {
    $scope.name = "jameel";
    $timeout(function() {
      $scope.name = "jam";
    }, 3000);
    $scope.handle = "";
    $scope.lowercaseHandle = function() {
      return $filter("lowercase")($scope.handle);
    };

    $scope.characters = 5;





    // console.log('$scope', $scope, '$log', $log);
    //   $log.log("hello");
    //   $scope.formatted = $filter("uppercase")($scope.name);
    // $log.info($scope.name);
    // $log.info($scope.formatted);
    // let db = document.getElementById("name");
    // console.log(db);
    // db.addEventListener("keypress", function(event) {
    //   console.log("pressed");
    // });
  }
]);

let Buisiness = function(name, size) {
  this.name = name;
  this.size = size;
};

function logBuisiness(buisiness) {
  console.log("this is buisiness", buisiness);
}

let target = new Buisiness("Target", 12);
logBuisiness(target);
