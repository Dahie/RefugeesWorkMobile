angular.module('refugees-work-mobile.services')

.factory('Leads', function($http, ENDPOINT_URI) {
  var path = 'v1/leads/';

  function getUrl() {
    return ENDPOINT_URI + path;
  }

  function getUrlForId(itemId) {
    return getUrl() + itemId;
  }

  return {
    all: function () {
      return $http.get(getUrl());
    },
    get: function (itemId) {
      return $http.get(getUrlForId(itemId));
    },
    create: function (item) {
      return $http.post(getUrl(), item);
    },
    update: function (itemId, item) {
      return $http.put(getUrlForId(itemId), item);
    },
    destroy: function (itemId) {
      return $http.delete(getUrlForId(itemId));
    }
  };
});
