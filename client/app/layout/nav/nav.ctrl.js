
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Layout.Nav.Controller', [
	'DigiSite.Layout.Nav.Menu.Service'
])

/**
 * Controller
 */
.controller('NavCtrl', function($window, $scope) {

	//Remember current state
	var currentState = '';

	//Compact header setting
	$scope.isCompact = false;

	//Compact header when scrolling on the home page
	$scope.$on('detectedScrolling', function(event, scrollElement, scrollOffset) {
		if (currentState == 'home') {
			$scope.isCompact = (scrollOffset > 128);
		}
	});

	//Listen for state changes to toggle compact header
	$scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		currentState = toState.name;
		if (currentState == 'home') {
			$scope.isCompact = false;
		}
		else {
			$scope.isCompact = true;
		}
	});
});