
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
		 *
		 * @param	string	Input string
		 * @param	string	Converted string
		 */
		dasherize: function(s) {
			return s.trim().replace(/([A-Z])/g,"$1").replace(/[-_\s]+/g,"-").toLowerCase();
		},

		/**
		 * Convert special characters to HTML entities
		 *
		 * @param	string	Input string
		 * @param	string	Converted string
		 */
		htmlEntities: function(s) {
			return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
		}
	};

	//Return it
	return StringUtils;
});