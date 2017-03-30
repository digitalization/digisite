/**
 * Module definition and dependencies
 */
angular.module('Site.Home.Projects.BackgroundImage.Directive', [])

/**
 * Directive definition
 */
.directive('backgroundImage', function($document) {
  return {
    restrict: 'A',
    //eslint-disable-next-line no-unused-vars
    link(scope, element, attrs) {
      attrs.$observe('backgroundImage', function(src) {

        //Reset background image
        element.css({
          'background-image': null,
        });

        //No source?
        if (!src) {
          return;
        }

        //Create image element
        const img = $document[0].createElement('img');

        //Append onload event
        img.onload = function() {
          element.css({
            'background-image': 'url(' + this.src + ')',
          });
        };

        //Set source on image now
        img.src = src;
      });
    },
  };
});
