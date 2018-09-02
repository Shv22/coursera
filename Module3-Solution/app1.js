(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var list = this;
  list.getItmes = MenuSearchService();

}
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    })

  .then(function (response) {
      // process result and only keep items that match
      //var foundItems...
      console.log(response);
      // return processed items
      //return foundItems;
  });
}

});
