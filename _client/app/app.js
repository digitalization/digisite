
/**
 * Module definition and dependencies
 */
angular.module('DigiSite', [

	//Angular
	'ngAnimate',
	'ngSanitize',
	'ngMessages',

	//3rd party
	'ui.router',

	//Templates
	'Templates.App',
	'Templates.Common',

	//Site modules
	'DigiSite.Controller',
	'DigiSite.Nav',
	'DigiSite.Home'
	/*'DigiSite.Vacancies',
	'DigiSite.Industrial',
	'DigiSite.Embedded',
	'DigiSite.Webbased',
	'DigiSite.Technical'*/
])

/**
 * App constant
 */
.constant('DigiSite', {
	name:		'Digitalization',
	version:	'7.0.0',
	copyright:	2015
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
.run(function($rootScope, $location, $window, DigiSite) {

	//Set app constant in root scope
	$rootScope.DigiSite = DigiSite;

	/**
	 * On state changes, trigger a page view
	 */
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

		//Track page view
		if ($window.ga) {
			$window.ga('send', 'pageview', {
				page: $location.url()
			});
		}
	});
});