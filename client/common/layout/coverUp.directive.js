/**
 * @version 1.0.1
 */

/**
 * Module definition and dependencies
 */
angular.module('Common.Layout.coverUp.Directive', [
	'Common.Events.detectScrolling.Directive'
])

/**
 * Directive
 */
.directive('coverUp', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {

			//Get factor and act on scrolling
			var factor = attrs.coverUp || 1;
			scope.$on('detectedScrolling', function(event, elem, offset) {
				var margin = Math.round(offset * factor);
				if (margin > element[0].clientHeight) {
					margin = element[0].clientHeight;
				}
				//element.css({marginBottom: -1 * margin + 'px'});
			});
		}
	};
});