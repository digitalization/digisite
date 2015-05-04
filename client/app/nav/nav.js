
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Nav', [
	'DigiSite.Nav.Controller',
	'DigiSite.Nav.Menu.Service'
])

/**
 * Run logic
 */
.run(function($rootScope, Menu) {

	//Set menu service in root scope
	$rootScope.Menu = Menu;
});