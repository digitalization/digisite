
/**
 * Module definition and dependencies
 */
angular.module('Common.Layout.backgroundOverlay.Directive', [])

/**
 * Directive
 */
.directive('backgroundOverlay', function($document) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {

			//Get the overlay element
			var overlayElement = angular.element($document[0].createElement('div'));
			overlayElement.css({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 0
			});

			//Apply higher z index to element children
			angular.element(element[0].children).css({
				zIndex: 1
			});

			//Apply some CSS to parent element and append overlay element
			element.css({
				position: 'relative'
			}).append(overlayElement);

			//Set overlay color
			attrs.$observe('backgroundOverlay', function(overlayColor) {
				overlayElement.css({
					'background-color': overlayColor
				});
			});
		}
	};
});