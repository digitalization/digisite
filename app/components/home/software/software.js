
/**
 * Module definition and dependencies
 */
angular.module('Site.Home.Software', [])

/**
 * Route component
 */
.component('homeSoftware', {
  templateUrl: 'home/software/software.html',
})

/**
 * Config
 */
.config($stateProvider => {
  $stateProvider.state('home.software', {
    url: 'software',
  });
});
