
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Is', [
	'DigiSite.Is.Controller'
])

/**
 * Config
 */
.config(function($stateProvider) {

	//State definition
	$stateProvider.state('is', {
		url:			'/industriele-software',
		controller:		'IsCtrl',
		templateUrl:	'is/is.html'
	});
});