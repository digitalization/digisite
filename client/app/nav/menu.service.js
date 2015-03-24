
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Nav.Menu.Service', [])

/**
 * Factory definition
 */
.factory('Menu', function() {
	return {

		//Main menu
		main: [
			{sref: "home.software", title: "Software", section: "software"},
			{sref: "home.projects", title: "Projects", section: "projects"},
			{sref: "home.company", title: "Company", section: "company"},
			{sref: "home.contact", title: "Contact", section: "contact"}
		],

		//Footer menu
		footer: [
			{sref: "home", title: "Home"},
			{sref: "home.software", title: "Software"},
			{sref: "home.projects", title: "Projects"},
			{sref: "vacancies", title: "Vacancies"},
			{sref: "home.company", title: "Company"},
			{sref: "home.contact", title: "Contact"}
		]
	};
});