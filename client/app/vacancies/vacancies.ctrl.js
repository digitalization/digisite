
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Vacancies.Controller', [
	'DigiSite.Shared.Vacancies.Service'
])

/**
 * Controller
 */
.controller('VacanciesCtrl', function(
	$scope, $state, Vacancies
) {

	//Set vacancies in scope
	$scope.Vacancies = Vacancies;
});