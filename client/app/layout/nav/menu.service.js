
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Layout.Nav.Menu.Service', [])

/**
 * Factory definition
 */
.factory('Menu', function() {
	return {

		//Main menu
		main: [
			{sref: "home", title: "Software"},
			{sref: "home", title: "Projecten"},
			{sref: "home", title: "Bedrijf"},
			{sref: "home", title: "Contact"}
		],

		//Footer menu
		footer: [
			{sref: "home", title: "Home"},
			{sref: "home", title: "Software"},
			{sref: "home", title: "Projecten"},
			{sref: "vacancies", title: "Vacatures"},
			{sref: "home", title: "Bedrijf"},
			{sref: "home", title: "Contact"}
		]
	};
});