#Angular-UI: Router coexistence with Iron: Router

This repo is a compliment to the StackOverflow question [here](http://stackoverflow.com/questions/31035196/iron-router-conflict-with-angular-ui-router).

##Example

Navigate to client/routes.ng.js. At the top of the page, you'll see the top level route utilizes Iron: Router. Its job is to display the main page template for our app that contains the top level ui-view. Iron: Router does this for us once when the page first loads and then Angular-UI: Router takes over.

If any route needs to be defined inside of Iron: Router (Besides the top level route), the same exact state for that route needs to be defined in Angular-UI: Router and then stopped. We do this by looking for the route on '$stateChangeStart' and then calling preventDefault() on it. An example of this can be seen directly under the Iron: Router definition.