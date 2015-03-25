
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Nav.Menu.Service', [])

/**
 * Constant definition
 */
.constant('Menu', [
	{sref: "home", title: "Home", section: "home", isMain: false},
	{sref: "home.software", title: "Software", section: "software", isMain: true},
	{sref: "home.projects", title: "Projects", section: "projects", isMain: true},
	{sref: "home.company", title: "Company", section: "company", isMain: true},
	{sref: "vacancies", title: "Vacancies", isMain: false},
	{sref: "home.contact", title: "Contact", section: "contact", isMain: true}
]);