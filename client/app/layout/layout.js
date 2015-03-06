
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
.run(function($rootScope, $window) {

	//Window size property setter
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
	$rootScope.$on('$stateChangeSuccess', function(event) {
		$window.scrollTo(0, 0);
	});
});