
/**
 * Module definition and dependencies
 */
angular.module('Common.Layout.detectScrolling.Directive', [])

/**
 * Directive
 */
.directive('detectScrolling', function($window, $rootScope) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {

			//Event handler
			var dispatchEvent = function(scrollOffset) {
				var scrollElement = this;
				scope.$apply(function() {
					$rootScope.isScrolling = (scrollOffset > 0);
					$rootScope.$broadcast('detectedScrolling', scrollElement, scrollOffset);
				});
			};

			//Attach event to element
			element.on('scroll', function() {
				dispatchEvent.call(element, element.context.scrollTop);
			});

			//Attach event to window
			angular.element($window).on('scroll', function() {
				dispatchEvent.call($window, $window.pageYOffset);
			});
		}
	};
});