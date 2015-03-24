
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Vacancies', [
	'DigiSite.Vacancies.Controller'
])

/**
 * Config
 */
.config(function($stateProvider) {

	//State definition
	$stateProvider.state('vacancies', {
		url:			'/vacancies',
		controller:		'VacanciesCtrl',
		templateUrl:	'vacancies/vacancies.html'
	});
});