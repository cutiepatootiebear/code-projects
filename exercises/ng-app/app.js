let myApp = angular.module("myApp", []);

myApp.controller("mainController", function($scope, $log) {
  // console.log('$scope', $scope, '$log', $log);
  $log.log("hello");
});

let Buisiness = function(name, size) {
  this.name = name;
  this.size = size;
};

function logBuisiness(buisiness) {
  console.log("this is buisiness", buisiness);
}

let target = new Buisiness("Target", 12);
logBuisiness(target);
