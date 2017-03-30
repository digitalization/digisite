
/**
 * Module definition and dependencies
 */
angular.module('Site.Home.Company', [])

/**
 * Route component
 */
.component('homeCompany', {
  templateUrl: 'home/company/company.html',
})

/**
 * Config
 */
.config($stateProvider => {
  $stateProvider.state('home.company', {
    url: 'company',
  });
});
