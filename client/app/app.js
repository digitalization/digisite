
/**
 * Module definition and dependencies
 */
angular.module('DigiSite', [

	//Angular
	'ngAnimate',
	'ngTouch',
	'ngCookies',
	'ngSanitize',
	'ngMessages',

	//3rd party
	'ui.router',

	//Templates
	'Templates.App',
	'Templates.Common',

	//Common services and directives
	'Common.Utils.StringUtils.Service',
	'Common.Utils.StorageUtils.Service',

	//Core modules
	'DigiSite.Controller',
	'DigiSite.Layout',
	'DigiSite.Nav',

	//Other modules
	'DigiSite.Home',
	'DigiSite.Vacancies',
	'DigiSite.Is',
	'DigiSite.Embedded',
	'DigiSite.Webbased',
	'DigiSite.Technical'
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

});