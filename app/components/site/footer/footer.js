
/**
 * Module definition and dependencies
 */
angular.module('Site.Footer', [])

/**
 * Component
 */
.component('siteFooter', {
  templateUrl: 'site/footer/footer.html',
  controller: 'SiteFooterCtrl',
  bindings: {
    smoothScrollTo: '&',
  },
})

/**
 * Controller
 */
.controller('SiteFooterCtrl', function() {

  /**
   * On init
   */
  this.$onInit = function() {

    //Set menu items
    this.menu = [
      {sref: 'home', title: 'Home', section: 'home', abstract: true},
      {sref: 'home.software', title: 'Software', section: 'software'},
      {sref: 'home.projects', title: 'Projects', section: 'projects'},
      {sref: 'home.company', title: 'Company', section: 'company'},
      {sref: 'home.clients', title: 'Clients', section: 'clients'},
      {sref: 'home.contact', title: 'Contact', section: 'contact'},
    ];
  };

  /**
   * Scroll to top
   */
  this.toTop = function() {
    this.smoothScrollTo({$event: {section: 'top'}});
  };
});
