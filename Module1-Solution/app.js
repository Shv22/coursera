(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LCController);

LCController.$inject = ['$scope'];
function LCController($scope) {
  $scope.items = "";
  $scope.message = "";
  $scope.checkItem = function(){
    var numberOfItems = calculateItems($scope.items)
    $scope.message = numberOfItems;
  }
  function calculateItems(string) {
    var items = string.split(",")
    if(items[0] === ""){              //checking for empty string
      return "Please enter data first" ;
    }
    else if (items.length < 4) {
      return "Enjoy!" ;
    }
    else {
      return "Too much!" ;
    }
  }
}

})();
