angular.module('refugees-work-mobile.services')

.factory('ReturnReasons', function($http) {
  return {
    all: function() {
      return $http.get('/js/return_rules.json');
    }
  };
});
