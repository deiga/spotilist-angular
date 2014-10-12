'use strict';

angular.module('spotilist', ['ngAnimate', 'ngCookies', 'ngSanitize', 'restangular', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
    RestangularProvider.setBaseUrl('https://api.spotify.com/v1');
    RestangularProvider.setDefaultHttpFields({cache: true});
    RestangularProvider.addResponseInterceptor(function(data, operation, what) {
      var extractedData = data;
      if (operation === 'getList') {
        extractedData = data[what];
      }
      return extractedData;
    });
  });
