'use strict';

angular.module('spotilist')
  .factory('Tracks', function(Restangular) {
    var tracks = Restangular.all('tracks');
    return {
      get: function (id) {
        if (Array.isArray(id)) {
          return tracks.getList({ids: id.join(',')}).$object;
        }
        return tracks.one(id).get();
      }
    };
  });
