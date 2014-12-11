
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Home.Controller', [
	'DigiSite.Shared.Projects.Service'
])

/**
 * Controller
 */
.controller('HomeCtrl', function(
	$scope, $state, Projects
) {

	//Projects
	$scope.Projects = Projects;
});