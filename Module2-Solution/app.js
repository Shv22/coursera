(function() {
  "use strict";
  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // ToBuyShoppingController
  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuyController = this;
    toBuyController.message = "";
    toBuyController.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    toBuyController.buy = function(index,message) {
      ShoppingListCheckOffService.buy(index);
    }
  }


  // AlreadyBoughtShoppingController
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var toBoughtController = this;
    toBoughtController.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  // ShoppingListCheckOffService
  function ShoppingListCheckOffService() {
    var service = this
    var toBuyItems = [
      {name: "coffee", quantity: 2},
      {name: "cookie", quantity: 3},
      {name: "apple", quantity: 4},
      {name: "orange", quantity: 5},
      {name: "butter", quantity: 5}
    ];
    var boughtItems = [];

    service.buy=function (index,message) {
      boughtItems.push(toBuyItems[index])
      toBuyItems.splice(index,1);
    }

    service.getToBuyItems = function() {
      return toBuyItems;
    }

    service.getBoughtItems = function() {
      return boughtItems;
    }

  }

})();
