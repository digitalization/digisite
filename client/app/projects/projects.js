
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Projects', [
	'DigiSite.Projects.Controller',
	'DigiSite.Projects.Service'
])

/**
 * Config
 */
.config(function($stateProvider) {

	//State definition
	$stateProvider.state('projects', {
		url:			'/projecten',
		controller:		'ProjectsCtrl',
		templateUrl:	'projects/projects.html'
	});
});