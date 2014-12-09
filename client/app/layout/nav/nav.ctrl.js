
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Layout.Nav.Controller', [
	'DigiSite.Layout.Nav.Menu.Service'
])

/**
 * Controller
 */
.controller('NavCtrl', function($scope) {

	//Detect scrolling
	$scope.isScrolling = false;
	$scope.$on('detectedScrolling', function(event, element, offset) {
		$scope.isScrolling = (offset > 96);
	});
	$scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		$scope.isScrolling = false;
	});
});