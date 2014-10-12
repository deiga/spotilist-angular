'use strict';

angular.module('spotilist')
  .factory('Artists', function(Restangular) {
    var artists = Restangular.all('artists');
    return {
      get: function (id) {
        if (Array.isArray(id)) {
          return artists.getList({ids: id.join(',')}).$object;
        }
        return artists.one(id).get();
      },
      getTopTracks: function (id) {
        return artists.one(id).getList('top-tracks').$object;
      },
      getAlbums: function (id) {
        return artists.one(id).getList('albums').$object;
      },
      getRelatedArtists: function (id) {
        return artists.one(id).getList('related-artists').$object;
      }
    };
  });
