/**
 * @version 1.0.5
 */

/**
 * Module definition and dependencies
 */
angular.module('Common.Utils.StringUtils.Service', [])

/**
 * Factory definition
 */
.factory('StringUtils', function() {

	/**
	 * Service object
	 */
	var StringUtils = {

		/**
		 * Convert a string to lowercase with dashes instead of spaces
		 */
		dasherize: function(s) {
			return String(s).trim().replace(/([A-Z])/g,"$1").replace(/[-_\s]+/g,"-").toLowerCase();
		},

		/**
		 * Convert special characters to HTML entities
		 */
		htmlEntities: function(s) {
			return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
		},

		/**
		 * Convert newlines to <br />
		 */
		nl2br: function(s) {
			return String(s).replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />$2');
		}
	};

	//Return it
	return StringUtils;
});