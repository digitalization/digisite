
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Controller', [])

/**
 * Controller
 */
.controller('AppCtrl', function($scope, Menu, DigiSite) {

	//Set menu service in app-wide scope
	$scope.Menu = Menu;

	//Set DigiSite service in app-wide scope
	$scope.DigiSite = DigiSite;

	//Set title
	$scope.title = DigiSite.name;
});