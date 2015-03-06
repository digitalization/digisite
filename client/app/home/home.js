
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Home', [
	'DigiSite.Home.Controller',
	'DigiSite.Shared.Projects.Service'
])

/**
 * Config
 */
.config(function($stateProvider) {

	//State definition
	$stateProvider.state('home', {
		url:			'/',
		controller:		'HomeCtrl',
		templateUrl:	'home/home.html'
	});
});