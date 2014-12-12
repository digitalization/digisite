/**
 * @version 1.0.2
 */

/**
 * Module definition and dependencies
 */
angular.module('Common.Layout.backgroundScroll.Directive', [
	'Common.Events.detectScrolling.Directive'
])

/**
 * Directive
 */
.directive('backgroundScroll', function($document, $window) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {

			//Create image element
			var src = attrs.backgroundScroll,
				img = $document[0].createElement('img');

			//Get scroll factors
			var scrollX = parseFloat(attrs.scrollX || 0),
				scrollY = parseFloat(attrs.scrollY || 0);

			//Append onload event
			img.onload = function() {

				//Minimum background size should be enough to cover the element over the whole
				//total scroll distance while the element is in view. Determine scroll distance.
				var scrollDistance = $window.innerHeight + 2 * element[0].clientHeight;

				//Determine movement of background during this scroll distance in both directions
				var movementX = Math.ceil(scrollDistance * scrollX),
					movementY = Math.ceil(scrollDistance * scrollY);

				//Determine required size of background image in both directions
				var requiredW = element[0].clientWidth + movementX,
					requiredH = element[0].clientHeight + movementY;

				//Determine scaling factor
				var scale = 100 * Math.max(requiredW/this.width, requiredH/this.height);

				//Set CSS
				element.css({
					'background-image': 'url(' + this.src + ')',
					'background-size': scale + '%'
				});
			};

			//Set source on image now
			img.src = src;

			//Act on scrolling
			scope.$on('detectedScrolling', function(event, scrollElement, scrollOffset) {

				//Determine element top
				var elemTop = element[0].offsetTop - $window.innerHeight,
					offsetX, offsetY;

				//Only scroll when we start to be in view
				if (scrollOffset < elemTop) {
					offsetX = 0;
					offsetY = 0;
				}
				else {
					offsetX = Math.round((scrollOffset - elemTop) * scrollX) * -1;
					offsetY = Math.round((scrollOffset - elemTop) * scrollY) * -1;
				}

				//Move background
				element.css({'background-position': offsetX + 'px ' + offsetY + 'px'});
			});
		}
	};
});