/**
 * @version 1.0.2
 */

/**
 * Module definition and dependencies
 */
angular.module('Common.Utils.StorageUtils.Service', [])

/**
 * Factory definition
 */
.factory('StorageUtils', function() {

	/**
	 * Service object
	 */
	var StorageUtils = {

		/**
		 * Parse a string coming out of local or session storage
		 */
		parseStorage: function(value, whenNull) {
			if (value === null || typeof value != 'string' || (value.charAt(0) != '{' && value.charAt(0) != '[')) {
				return (typeof whenNull == 'undefined') ? null : whenNull;
			}
			return JSON.parse(value);
		}
	};

	//Return it
	return StorageUtils;
});