
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
	$scope, $state, Menu, Projects
) {

	//Projects
	$scope.Projects = Projects;

	//Child state? scroll to proper page
	if ($state.current.url != '/') {
		for (var i = 0; i < Menu.length; i++) {
			if (Menu[i].sref == $state.current.name && Menu[i].section) {
				$scope.scrollTo(Menu[i].section);
				break;
			}
		}
	}
});