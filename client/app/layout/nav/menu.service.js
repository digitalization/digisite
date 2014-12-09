
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Layout.Nav.Menu.Service', [])

/**
 * Factory definition
 */
.factory('Menu', function() {

	/**
	 * Class object
	 */
	var Menu = {

		//Define the menu items for the site
		items: [
			{sref: "home", title: "Home"},
			{sref: "test.browse", title: "Test"},
		]
	};

	//Return
	return Menu;
});