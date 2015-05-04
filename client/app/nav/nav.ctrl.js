
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Nav.Controller', [
	'Common.Events.detectWindowScrolling.Directive',
	'smoothScroll'
])

/**
 * Controller
 */
.controller('NavCtrl', function($window, $rootScope, $scope, $state, $timeout, Menu, smoothScroll) {

	//Initialize vars
	var currentPage,
		isAutoScrolling = false,
		isAutoStateChanging = false;

	//Flags
	$scope.isScrolled = isScrolled();
	$scope.isMobile = isMobile();
	$scope.isMenuVisible = false;

	/*****************************************************************************
	 * Helpers
	 ***/

	/**
	 * Is mobile check helper
	 */
	function isMobile() {
		return ($window.innerWidth < 768);
	}

	/**
	 * Is scrolled check helper
	 */
	function isScrolled() {
		return (currentPage != 'home' || $window.pageYOffset > ($window.innerWidth * 0.1));
	}

	/**
	 * Scrolling helper
	 */
	function scrollTo(sref) {

		//Find corresponding menu item and scroll to proper section
		for (var i = 0; i < Menu.length; i++) {
			if (Menu[i].sref == sref && Menu[i].section) {
				$scope.smoothScrollTo(Menu[i].section);
				break;
			}
		}
	}

	/*****************************************************************************
	 * Event listeners
	 ***/

	/**
	 * Scrolling event listener
	 */
	$scope.$on('detectedScrolling', function(event, scrollOffset) {

		//Toggle has scrolled flag
		$scope.isScrolled = isScrolled();

		//Auto scrolling? Don't change state
		if (isAutoScrolling) {
			return;
		}

		//Loop menu items in reverse and toggle the proper state when in view
		for (var i = Menu.length - 1; i >= 0; i--) {
			if (Menu[i].section) {

				//Reached this section?
				if (scrollOffset > (document.getElementById(Menu[i].section).offsetTop - $window.innerHeight * 1/4)) {

					//Already in this state? No need to do anything
					if (Menu[i].sref == $state.current.name) {
						break;
					}

					//If not in this state, block scrolling on state change and go to this state
					isAutoStateChanging = true;
					$state.go(Menu[i].sref);
					return;
				}
			}
		}
	});

	/**
	 * State change event listener
	 */
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

		//Get to and from parent states
		var toPage = toState.name.split('.')[0],
			fromPage = fromState.name.split('.')[0];

		//Remember new page
		currentPage = toPage;

		//Went to different main page?
		if (toPage != fromPage) {

			//Toggle is scrolled state now, except when going to the home page
			//There it will be smoothly togged after the transition
			if (toPage != 'home' || !fromPage) {
				$scope.isScrolled = isScrolled();
			}

			//Mark as auto scrolling to prevent state changes
			isAutoScrolling = true;

			//Scroll to section after a timeout (to allow state transition to complete)
			//TODO: A shorter timeout gives a nicer animation, but the problem is if you navigate
			//from the bottom of a long page to the top of the new page, the sudden shortening
			//of the page prematurely stops the initiated smooth scroll sequence and then
			//triggers a state change if at the level of another state.
			$timeout(function() {
				$scope.isScrolled = isScrolled();
				scrollTo(toState.name);
			}, 525);
			return;
		}

		//If this was an automatic state change (due to scrolling), no need to scroll
		if (isAutoStateChanging) {
			isAutoStateChanging = false;
			return;
		}

		//Scroll to section
		scrollTo(toState.name);
	});

	/**
	 * Hide menu and set mobile state on window resize (necessary to prevent menu transitions)
	 */
	angular.element($window).on('resize', function() {
		$scope.isMenuVisible = false;
		$scope.isMobile = isMobile();
	});

	/*****************************************************************************
	 * Scope methods
	 ***/

	/**
	 * Active state check (not checking child/parent state relation)
	 */
	$scope.isActiveState = function(sref) {
		return ($state.current.name == sref);
	};

	/**
	 * Menu toggle
	 */
	$scope.toggleMenu = function(show) {
		if (angular.isDefined(show)) {
			$scope.isMenuVisible = !!show;
		}
		else {
			$scope.isMenuVisible = !$scope.isMenuVisible;
		}
	};

	/**
	 * Smooth scroll helper
	 */
	$rootScope.smoothScrollTo = function(section) {

		//Get element
		var element = document.getElementById(section);

		//Smooth scroll to it
		$timeout(function() {
			if (element) {
				smoothScroll(element, {
					offset: 48,
					callbackBefore: function(element) {
						isAutoScrolling = true;
					},
					callbackAfter: function(element) {
						isAutoScrolling = false;
					}
				});
			}
		}, 25);
	};
});