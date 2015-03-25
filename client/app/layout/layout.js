
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

	/**
	 * Scroll to top on state changes
	 */
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