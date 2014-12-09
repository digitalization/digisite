
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Layout', [
	'DigiSite.Layout.Nav',
	'DigiSite.Layout.Technical.Directive'
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
});