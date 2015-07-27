angular.module('routerexample.directives').directive('navbar',
	function($meteor, $state){

	return {
		restrict: 'E',
		templateUrl: 'client/app/directives/navbar/navbar.ng.html',
		controller: 'NavbarCtrl'
	};
	
});