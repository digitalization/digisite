
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Industrial', [
	'DigiSite.Industrial.Controller'
])

/**
 * Config
 */
.config(function($stateProvider) {

	//State definition
	$stateProvider.state('industrial', {
		url:			'/industrial-automation',
		controller:		'IndustrialCtrl',
		templateUrl:	'industrial/industrial.html'
	});
});