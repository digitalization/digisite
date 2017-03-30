
/**
 * Module definition and dependencies
 */
angular.module('Site.Home', [
  'Site.Home.Hero',
  'Site.Home.Software',
  'Site.Home.Projects',
  'Site.Home.Company',
  'Site.Home.Clients',
  'Site.Home.Contact',
])

/**
 * Config
 */
.config($stateProvider => {
  $stateProvider.state('home', {
    parent: 'site',
    url: '/',
    component: 'homeRoute',
  });
})

/**
 * Route component
 */
.component('homeRoute', {
  templateUrl: 'home/home.html',
});
