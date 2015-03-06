
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Layout', [
	'DigiSite.Layout.Header',
	'DigiSite.Layout.Technical.Directive',
	'Common.Layout.coverUp.Directive',
	'Common.Layout.backgroundImage.Directive',
	'Common.Layout.backgroundScroll.Directive'
])

/**
 * Run logic
 */
.run(function($rootScope, $window, $timeout, smoothScroll) {

	/**
	 * Helper to scroll to a particular section
	 */
	$rootScope.scrollTo = function(section) {
		$timeout(function() {
			var offset = document.getElementsByTagName('header')[0].clientHeight,
				element = document.getElementById(section);
			if (element) {
				smoothScroll(element, {offset: offset});
			}
		}, 10);
	};

	/**
	 * Window size property setter
	 */
	$rootScope.setWindowSize = function() {
		$rootScope.windowHeight	= $window.innerHeight;
		$rootScope.windowWidth	= $window.innerWidth;
	};

	//Call intially
	$rootScope.setWindowSize();

	//Bind to resize event
	angular.element($window).on('resize', function() {
		$rootScope.$apply(function() {
			$rootScope.setWindowSize();
		});
	});

	//Scroll to top on state changes
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

		//Get to and from parent state names
		var toName = toState.name.split('.')[0],
			fromName = fromState.name.split('.')[0];

		//Different parent states? Scroll to top
		if (toName != fromName) {
			$window.scrollTo(0, 0);
		}
	});
});