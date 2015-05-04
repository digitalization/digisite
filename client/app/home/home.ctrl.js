
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Home.Controller', [
	'DigiSite.Shared.Projects.Service'
])

/**
 * Controller
 */
.controller('HomeCtrl', function(
	$scope, $state, $http, $timeout, Projects
) {

	//Projects
	$scope.Projects = Projects;

	//Contact model
	$scope.contact = {};

	//Flags
	$scope.isSending = false;
	$scope.isSent = false;

	/**
	 * Submit contact form
	 */
	$scope.submitContactForm = function(contact) {

		//Must be validated
		if ($scope.contactForm.$invalid) {
			return;
		}

		//Mark as sending
		$scope.isSending = true;

		//Send contact request
		$http.post('api/contact', contact).success(function(data) {

			//Toggle flags
			$scope.isSending = false;
			$scope.isSent = true;

			//Reset model and mark form as pristine
			$scope.contact = {};
			$scope.contactForm.$setPristine();
			$scope.contactForm.$setUntouched();

			//Timeout sent flag
			$timeout(function() {
				$scope.isSent = false;
			}, 5000);

		}).error(function(error) {
			$scope.isSending = false;
		});
	};
});