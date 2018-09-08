(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/MenuService/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
