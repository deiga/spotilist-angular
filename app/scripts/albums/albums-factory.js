'use strict';

angular.module('spotilist')
  .factory('Albums', function(Restangular) {
    var albums = Restangular.all('albums');
    return {
      get: function (id) {
        if (Array.isArray(id)) {
          return albums.getList({ids: id.join(',')}).$object;
        }
        return albums.one(id).get();
      },
      getTracks: function (id) {
        return albums.one(id).getList('tracks').$object;
      }
    };
  });
