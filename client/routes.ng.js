//This loads the initial template into the index.html page
Router.route('/(.*)', function(){
  this.render('index');
});

angular.module("routerexample").run(function($rootScope, $location, $state) {
  $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){ 
  });
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    //This is to not interfere with Houston Admin
    if(toState.name == "admin1" || toState.name == "admin2"){
      event.preventDefault();
    }
  });
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    // if (error === "AUTH_REQUIRED") {
    //   //$location.path("/");
    //   $state.go('main');
    // }
    $state.go('main');
  });
  $rootScope.$on('logged-in', function(){
    $state.go('home');
  });
  $rootScope.$on('logged-out', function(){
    $state.go('main');
  });
  $rootScope.$on('bad-params', function(){
    $state.go('main');
  });
});

angular.module("routerexample").config(
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    //This is to clean the routes up a bit, this is commonly repeated code
    var waitForUser = function($meteor){
      return $meteor.waitForUser();
    };
    var requireUser = function($meteor){
      return $meteor.requireUser();
    };

    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'client/app/main/main.ng.html',
      controller: 'MainCtrl',
      resolve: {
        currentUser: waitForUser
      }
    })
    .state('home',{
      url: '/home',
      templateUrl: 'client/app/main/home.ng.html',
      controller: 'MainCtrl',
      resolve: {
        currentUser: requireUser
      }
    })
    // These routes belong to Houston Admin
    .state('admin1',{
      url: '/admin',
      template: "<h1>Doesn't render, this is Houstons domain</h1>"
    })
    .state('admin2',{
      url: '/admin/*path',
      template: "<h1>Doesn't render, this is Houstons domain</h1>"
    });
    
  }
);