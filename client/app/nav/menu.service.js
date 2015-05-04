
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Nav.Menu.Service', [])

/**
 * Constant definition
 */
.constant('Menu', [
	{sref: "home", title: "Home", section: "home", classes: "home"},
	{sref: "home.software", title: "Software", section: "software"},
	{sref: "home.projects", title: "Projects", section: "projects"},
	{sref: "home.company", title: "Company", section: "company"},
	{sref: "home.clients", title: "Clients", section: "clients", classes: "clients"},
	{sref: "home.contact", title: "Contact", section: "contact"}
]);