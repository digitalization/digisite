
/**
 * Module definition and dependencies
 */
angular.module('Site.Home.Clients.WorkItems.Component', [
  'Site.Home.Clients.WorkItem.Component',
])

/**
 * Component
 */
.component('workItems', {
  template: `<div class="work-items" ng-transclude></div>`,
  transclude: true,
  controller() {

    /**
     * Initialize
     */
    this.$onInit = function() {
      this.items = new Set();
      this.opened = null;
    };

    /**
     * Add an item
     */
    this.add = function(item) {
      this.items.add(item);
    };

    /**
     * Remove an item
     */
    this.remove = function(item) {
      this.items.remove(item);
    };

    /**
     * Open an item
     */
    this.open = function(item) {

      //Close opened item first
      this.close();

      //Open item
      item.open();
      this.opened = item;
    };

    /**
     * Close open item
     */
    this.close = function() {

      //Must have an opened item
      if (!this.opened) {
        return;
      }

      //Close item
      this.opened.close();
      this.opened = null;
    };
  },
});
