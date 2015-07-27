#Angular-UI: Router coexistence with Iron: Router

This repo is a compliment to the StackOverflow question [here](http://stackoverflow.com/questions/31035196/iron-router-conflict-with-angular-ui-router).

##Example

Navigate to client/routes.ng.js. At the top of the page, you'll see the top level route utilizes Iron: Router. Its job is to display the main page template for our app that contains the top level ui-view. Iron: Router does this for us once when the page first loads and then Angular-UI: Router takes over.

Check out client/index.html to see what I mean, the index.html page contains the top level blaze template, which then provides the ui-view for Angular.

If any route needs to be defined inside of Iron: Router (Besides the top level route), a state for that same exact route needs to be defined in Angular-UI: Router and then stopped. We stop it by looking for the route on '$stateChangeStart' and then calling preventDefault() on it. This will prevent Angular from playing with the url and the template. An example of this can be seen directly under the Iron: Router definition.