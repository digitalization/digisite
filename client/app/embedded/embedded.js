
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Embedded', [
	'DigiSite.Embedded.Controller'
])

/**
 * Config
 */
.config(function($stateProvider) {

	//State definition
	$stateProvider.state('embedded', {
		url:			'/embedded-software',
		controller:		'EmbeddedCtrl',
		templateUrl:	'embedded/embedded.html'
	});
});