angular.module('routerexample',[
	'routerexample.controllers',
	'routerexample.services',
	'routerexample.directives',
	'routerexample.filters',
	'angular-meteor',
	'ui.router'
]).run(function($meteor,$rootScope,$state,$localstorage){
	//This code is only for development
	$meteor.autorun($rootScope, function(){
		var id = Meteor.userId();
		if(id == undefined || id == null){
			id = '';
		}
		if($localstorage.get('user_id','') != id){
			$localstorage.set('user_id',id);
			if(Meteor.userId()){
				//On login
				$rootScope.$broadcast('logged-in');
			}else{
				//On logout
				$rootScope.$broadcast('logged-out');
			}
		}
	});
});

angular.module('routerexample.services',[
	'angular-meteor',
	'ui.router'
]);

angular.module('routerexample.filters',[
	'angular-meteor',
	'ui.router',
	'routerexample.services'
]);

angular.module('routerexample.controllers',[
	'angular-meteor',
	'ui.router',
	'routerexample.services',
	'routerexample.filters'
]);

angular.module('routerexample.directives',[
	'angular-meteor',
	'ui.router',
	'routerexample.services',
	'routerexample.filters',
	'routerexample.controllers'
]);


function onReady(){
  angular.bootstrap(document, ['routerexample']);
}

if(Meteor.isCordova){
  angular.element(document).on("deviceready", onReady);
}else{
  angular.element(document).ready(onReady);
}
