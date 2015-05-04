
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Webbased', [
	'DigiSite.Webbased.Controller'
])

/**
 * Config
 */
.config(function($stateProvider) {

	//State definition
	$stateProvider.state('webbased', {
		url:			'/webbased-en-cloud-computing',
		controller:		'WebbasedCtrl',
		templateUrl:	'webbased/webbased.html'
	});
});