
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Home', [
	'DigiSite.Home.Controller'
])

/**
 * Config
 */
.config(function($stateProvider) {

	//Home
	$stateProvider.state('home', {
		url:			'/',
		controller:		'HomeCtrl',
		templateUrl:	'home/home.html'
	});

	//Projects
	$stateProvider.state('home.projects', {

	});

	//Software
	$stateProvider.state('home.software', {

	});

	//Contact
	$stateProvider.state('home.contact', {

	});
});