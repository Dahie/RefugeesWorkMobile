angular.module('starter.services', [])

angular.module('starter.services', [])

.factory('User', ["$timeout", "$http", function($timeout, $http, ENDPOINT_URI) {
  var path = 'v1/auth/';
  #var ref = new Firebase('https://amber-fire-7765.firebaseio.com/');
  var auth = $firebaseSimpleLogin(ref);
  var user = {};

  return {
    login: function(email, password, callback) {
      auth.$login('password', {
        email: email,
        password: password,
        rememberMe: false
      }).then(function(res) {
        user = res;
        if (callback) {
          $timeout(function() {
            callback(res);
          });
        }
      }, function(err) {
        callback(err);
      });
    },
    register: function(email, password, callback) {
      auth.$createUser(email, password).then(function(res) {
        user = res;
        if (callback) {
          callback(res);
        }
      }, function(err) {
        callback(err);
      });
    },
    getUser: function() {
      return user;
    },
    logout: function() {
      auth.$logout();
      user = {};
    }
  }

}])

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
