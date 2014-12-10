
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Projects.Controller', [])

/**
 * Controller
 */
.controller('ProjectsCtrl', function(
	$scope, $state, Projects
) {

	//Set projects in scope
	$scope.Projects = Projects;

});