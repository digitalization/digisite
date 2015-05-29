
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Home.Flippable.Directive', [])

/**
 * Directive
 */
.directive('flippable', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
            scope.$on('flipped', function(event, flippedElement) {
                if (flippedElement !== element) {
                    element.removeClass('flipped');
                }
            });
			element.on('click', function() {
                element.toggleClass('flipped');
                if (element.hasClass('flipped')) {
                    scope.$broadcast('flipped', element);
                }
            });
		}
	};
});
