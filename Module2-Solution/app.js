(function () {
'use strict';



angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListService) {
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getItems();
//  itemAdder.itemName = "";
//  itemAdder.itemQuantity = "";

  //itemAdder.addItem = function () {
  //  ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
}


AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];
function AlreadyBoughtController($scope,ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;
  var listToBuy = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Coffee",
      quantity: "5"
    }
  ];

  // List of shopping items
  service.items= listToBuy;

//  service.addItem = function (itemName, quantity) {
//    var item = {
//      name: itemName,
//      quantity: quantity
//    };
//    items.push(item);
//  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    console.log("SD")
    return service.items;
  };
}

})();
