
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
			var dispatchEvent = function(offset) {
				var elem = this;
				scope.$apply(function() {
					$rootScope.isScrolling = (offset > 0);
					$rootScope.$broadcast('detectedScrolling', elem, offset);
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