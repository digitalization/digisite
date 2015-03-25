
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Controller', [])

/**
 * Controller
 */
.controller('AppCtrl', function($scope, $timeout, smoothScroll, Menu, DigiSite) {

	//Set menu service in app-wide scope
	$scope.Menu = Menu;

	//Set DigiSite service in app-wide scope
	$scope.DigiSite = DigiSite;

	//Set title
	$scope.title = DigiSite.name;

	/**
	 * Helper to scroll to a particular section
	 */
	$scope.scrollTo = function(section) {
		$timeout(function() {
			var offset = 64,//document.getElementsByTagName('header')[0].clientHeight,
				element = document.getElementById(section);
			if (element) {
				smoothScroll(element, {offset: offset});
			}
		}, 100);
	};
});