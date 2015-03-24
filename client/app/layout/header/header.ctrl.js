
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Layout.Header.Controller', [
	'Common.Events.detectScrolling.Directive'
])

/**
 * Controller
 */
.controller('HeaderCtrl', function($window, $scope) {

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
		var toName = toState.name.split('.')[0],
			fromName = fromState.name.split('.')[0];
		currentState = toName;
		if (toName != fromName) {
			if (toName == 'home') {
				$scope.isCompact = false;
			}
			else {
				$scope.isCompact = true;
			}
		}
	});
});