
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Controller', [])

/**
 * Controller
 */
.controller('AppCtrl', function($rootScope) {

	/**
	 * Fields error state checker
	 */
	$rootScope.hasError = function(field, form) {
		if (!form.$submitted && !field.$dirty) {
			return false;
		}
		return field.$invalid;
	};
});