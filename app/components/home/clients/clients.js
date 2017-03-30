
/**
 * Module definition and dependencies
 */
angular.module('Site.Home.Clients', [
  'Site.Home.Clients.WorkItems.Component',
])

/**
 * Route component
 */
.component('homeClients', {
  templateUrl: 'home/clients/clients.html',
})

/**
 * Config
 */
.config($stateProvider => {
  $stateProvider.state('home.clients', {
    url: 'clients',
  });
});
