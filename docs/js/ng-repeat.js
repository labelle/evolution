var app = angular.module("elements", []);
app.controller("RangeController", function($scope) {


    $scope.range = function(max, min, step){
      step = step || 1;
      var input = [];
      for (var i = max; i >= min; i -= step) input.push(i);
      return input;
    };

    $scope.rangeUp = function(min, max, step){
      step = step || 1;
      var input = [];
      for (var i = min; i <= max; i += step) input.push(i);
      return input;
    };


});