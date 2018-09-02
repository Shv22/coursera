(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems);

function foundItems() {
  var ddo = {
    templateUrl: 'found.html',
    scope: {
      found: '<',
	  onRemove: '&'
    },
	controller: foundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function foundItemsDirectiveController() {
	var list = this;
	list.isEmpty = function() {
      return list.found != undefined && list.found.length === 0;
    }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var list = this
  list.getMatchedMenuItems = function(searchTerm){
    var promise = MenuSearchService.getMenuCategories(searchTerm)
	promise.then(function (response) {
		var finalList = [];
		var search = response.data.menu_items
		if(searchTerm == undefined)
				alert("Please enter a search term");
		else{
			for(var i=0;i<search.length;i++){
				if(search[i].description.indexOf(searchTerm) != -1){
					finalList.push(search[i])
				}
			}
			if (finalList.length>=1){
				list.noSearch = ""
				list.found = finalList;
			}
			else{
				finalList = [];
				list.found = finalList;
			}
		}
	})
	.catch(function (error) {
			console.log("Something went terribly wrong.");
	});
  }
  list.removeItem = function(index){
	list.found.splice(index,1);  
  }

}
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
	var service = this;
	service.getMenuCategories = function(searchTerm){
		var response = $http({
		method: "GET",
		url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
		console.log(response)
		return response;
	}
}
})();
