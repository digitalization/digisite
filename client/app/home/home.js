
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Home', [
	'DigiSite.Home.Controller',
	'Common.Layout.coverUp.Directive',
	'Common.Layout.backgroundImage.Directive',
	'Common.Layout.backgroundScroll.Directive'
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
		url: 'projects'
	});

	//Software
	$stateProvider.state('home.software', {
		url: 'software'
	});

	//Company
	$stateProvider.state('home.company', {
		url: 'company'
	});

	//Clients
	$stateProvider.state('home.clients', {
		url: 'clients'
	});

	//Contact
	$stateProvider.state('home.contact', {
		url: 'contact'
	});
});