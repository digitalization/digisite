
/**
 * Module definition and dependencies
 */
angular.module('DigiSite', [

	//Angular
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
	'Common.Layout.detectScrolling.Directive',
	'Common.Layout.coverUp.Directive',
	'Common.Layout.backgroundImage.Directive',
	'Common.Layout.backgroundScroll.Directive',
	'Common.Layout.backgroundOverlay.Directive',

	//App modules
	'DigiSite.Layout',
	'DigiSite.Home',
	'DigiSite.Projects'

	//App components

])

/**
 * App constant
 */
.constant('DigiSite', {
	name:		'Digitalization',
	version:	'7.0.0',
	copyright:	2015,
	error:		{
		SOME_ERROR: 	1,
		OTHER_ERROR:	2
	}
})

/**
 * Config
 */
.config(function(
	$provide, $urlRouterProvider, $locationProvider
) {

	//HTML 5 mode browsing
	$locationProvider.html5Mode(true);

	//Default route
	$urlRouterProvider.otherwise('/');

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
.controller('AppCtrl', function($scope, Menu, DigiSite) {

	//Set menu service in app-wide scope
	$scope.Menu = Menu;

	//Set DigiSite service in app-wide scope
	$scope.DigiSite = DigiSite;
});