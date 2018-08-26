(function functionName() {
'use strict'

  angular.module('myFirstApp', [])
  .controller('MyFirstController',function functionName($scope) {
    $scope.name="Shubham";
    $scope.sayHello = function(){
      return "Say Hello!";
    }
  })
})();
