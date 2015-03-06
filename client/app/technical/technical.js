
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Technical', [
	'DigiSite.Technical.Controller'
])

/**
 * Config
 */
.config(function($stateProvider) {

	//State definition
	$stateProvider.state('technical', {
		url:			'/technische-software',
		controller:		'TechnicalCtrl',
		templateUrl:	'technical/technical.html'
	});
});