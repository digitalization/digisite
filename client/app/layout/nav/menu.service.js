
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
			{sref: "company", title: "Bedrijf"},
			{sref: "software", title: "Software"},
			{sref: "projects", title: "Projecten"},
			{sref: "vacancies", title: "Vacatures"},
			{sref: "contact", title: "Contact"}
		],

		//Footer menu
		footer: [
			{sref: "home", title: "Home"},
			{sref: "company", title: "Bedrijf"},
			{sref: "software", title: "Software"},
			{sref: "projects", title: "Projecten"},
			{sref: "vacancies", title: "Vacatures"},
			{sref: "contact", title: "Contact"},
			{sref: "sitemap", title: "Sitemap"}
		]
	};
});