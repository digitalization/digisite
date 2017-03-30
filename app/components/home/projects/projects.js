
/**
 * Module definition and dependencies
 */
angular.module('Site.Home.Projects', [])

/**
 * Route component
 */
.component('homeProjects', {
  templateUrl: 'home/projects/projects.html',
})

/**
 * Config
 */
.config($stateProvider => {
  $stateProvider.state('home.projects', {
    url: 'projects',
  });
});
