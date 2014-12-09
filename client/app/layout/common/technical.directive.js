
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Layout.Technical.Directive', [])

/**
 * Directive
 */
.directive('technical', function() {
	return {
		restrict: 'E',
		template: '<i class="icon-cogs"></i><div ng-transclude></div>',
		transclude: true,
		link: function(scope, element, attrs) {


		}
	};
});