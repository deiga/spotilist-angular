'use strict';

angular.module('spotilist')
  .factory('Users', function(Restangular) {
    var users = Restangular.all('users');
    return {
      get: function (id) {
        return users.one(id).get();
      }
    };
  });
