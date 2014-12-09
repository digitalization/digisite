
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Home.Controller', [])

/**
 * Controller
 */
.controller('HomeCtrl', function(
	$scope, $state, DigiSite
) {

	//Set constant in scope
	$scope.DigiSite = DigiSite;
});