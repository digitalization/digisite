
/**
 * Module definition and dependencies
 */
angular.module('Site.Home.Clients.WorkItem.Component', [])

/**
 * Component
 */
.component('workItem', {
  template: `
    <div class="wrap" ng-class="{flipped: $ctrl.isOpen}" ng-click="$ctrl.toggle()">
      <figure class="logo"><img ng-src="{{'images/logos/' + $ctrl.logo}}" /></figure>
      <div class="text"><span ng-transclude></span></div>
    </div>
  `,
  transclude: true,
  bindings: {
    logo: '@',
  },
  require: {
    workItems: '^^',
  },
  controller() {

    /**
     * On init
     */
    this.$onInit = function() {
      this.isOpen = false;
      this.workItems.add(this);
    };

    /**
     * On destroy
     */
    this.$onDestroy = function() {
      this.workItems.remove(this);
    };

    /**
     * Toggle item
     */
    this.toggle = function() {
      if (this.isOpen) {
        this.workItems.close(this);
      }
      else {
        this.workItems.open(this);
      }
    };

    /**
     * Open this item
     */
    this.open = function() {
      this.isOpen = true;
    };

    /**
     * Close this item
     */
    this.close = function() {
      this.isOpen = false;
    };
  },
});
