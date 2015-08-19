(function() {
	'use strict';
	
	module1.config(['$stateProvider', '$urlRouterProvider', routeProvider]);
	
	function routeProvider($stateProvider, $urlRouterProvider) {
		$stateProvider.state('module1', {
			url: "/module1",
			controller: 'Module1Ctrl',
			templateUrl: "app/components/module1/module1.html"
		});
	}
})();