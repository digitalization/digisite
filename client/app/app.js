
/**
 * Module definition and dependencies
 */
angular.module('DigiSite', [

	//Angular
	'ngResource',
	'ngAnimate',
	'ngTouch',
	'ngCookies',
	'ngSanitize',

	//3rd party
	'ui.router',

	//Templates
	'Templates.App',
	'Templates.Common',

	//Common services and directives
	'Common.Utils.StringUtils.Service',
	'Common.Utils.StorageUtils.Service',

	//App modules
	'DigiSite.Layout',
	'DigiSite.Home'

	//App components

])

/**
 * App constant
 */
.constant('DigiSite', {
	name:		'My Application',
	version:	'1.0.0',
	error:		{
		SOME_ERROR: 	1,
		OTHER_ERROR:	2
	}
})

/**
 * Config
 */
.config(function(
	$provide, $urlRouterProvider, $locationProvider, ResourceProvider
) {

	//HTML 5 mode browsing
	$locationProvider.html5Mode(true);

	//Default route
	$urlRouterProvider.otherwise('/');

	//Default API url
	ResourceProvider.setBaseURL('/api');

	//Exception handling
	$provide.decorator('$exceptionHandler', function($log, $delegate) {
        return function(exception, cause) {
        	$delegate(exception, cause);
        };
    });
})

/**
 * Run logic
 */
.run(function() {

})

/**
 * Controller
 */
.controller('AppCtrl', function($scope, Menu) {

	//Set menu service in app-wide scope
	$scope.Menu = Menu;
});