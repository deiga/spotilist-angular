
/*================================================================
=>                  App = spotilist
==================================================================*/
/*global angular*/

var app = angular.module('spotilist', ["ngResource", "ngRoute", "ui.bootstrap"]);


app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
	'use strict';

	$routeProvider
		.when('/home', {
			templateUrl: 'templates/home.html'
		})
		.otherwise({
			redirectTo: '/home'
		});

	$locationProvider.hashPrefix('!');

	// This is required for Browser Sync to work poperly
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  spotilist App Run()  
==================================================================*/

app.run(['$rootScope', function ($rootScope) {
	
	'use strict';

	console.log('Angular.js run() function...');
}]);




/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */