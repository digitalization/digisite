
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

	//Home
	$stateProvider.state('home', {
		url:			'/',
		controller:		'HomeCtrl',
		templateUrl:	'home/home.html'
	});

	//Projects
	$stateProvider.state('home.projects', {
		onEnter: function($timeout, smoothScroll) {
			$timeout(function() {
				smoothScroll(document.getElementById('projects'));
			}, 10);
		}
	});

	//Software
	$stateProvider.state('home.software', {
		onEnter: function($timeout, smoothScroll) {
			$timeout(function() {
				smoothScroll(document.getElementById('software'));
			}, 10);
		}
	});

	//Contact
	$stateProvider.state('home.contact', {
		onEnter: function($timeout, smoothScroll) {
			$timeout(function() {
				smoothScroll(document.getElementById('contact'));
			}, 10);
		}
	});
});