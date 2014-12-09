
/**
 * Module definition and dependencies
 */
angular.module('Common.Layout.backgroundScroll.Directive', [
	'Common.Layout.detectScrolling.Directive'
])

/**
 * Directive
 */
.directive('backgroundScroll', function($window) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {

			//Get factor
			var factor = attrs.backgroundScroll || 1;

			//Minimum background size should be total travel distance plus element height
			var travelDistance = Math.ceil(factor * $window.innerHeight + element[0].clientHeight),
				bgSize = travelDistance + element[0].clientHeight;
			element.css({'background-size': 'auto ' + bgSize + 'px'});

			//Act on scrolling
			scope.$on('detectedScrolling', function(event, elem, offset) {

				//Determine element top
				var elemTop = element[0].offsetTop - $window.innerHeight;

				//Only scroll when we start to be in view
				if (offset < elemTop) {
					offset = 0;
				}
				else {
					offset -= elemTop;
				}

				//Determine margin
				var margin = Math.round(offset * factor);
				element.css({'background-position':  -1 * margin + 'px ' + -1 * margin + 'px'});
			});
		}
	};
});