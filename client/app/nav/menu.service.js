
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
			{sref: "home.software", title: "Software"},
			{sref: "home.projects", title: "Projects"},
			{sref: "company", title: "Company"},
			{sref: "home.contact", title: "Contact"}
		],

		//Footer menu
		footer: [
			{sref: "home", title: "Home"},
			{sref: "home.software", title: "Software"},
			{sref: "home.projects", title: "Projects"},
			{sref: "vacancies", title: "Vacancies"},
			{sref: "company", title: "Company"},
			{sref: "home.contact", title: "Contact"}
		]
	};
});