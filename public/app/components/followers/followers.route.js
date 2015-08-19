(function() {
	'use strict';
	
	followersModule.config(['$stateProvider', '$urlRouterProvider', routeProvider]);
	
	function routeProvider($stateProvider, $urlRouterProvider) {
		$stateProvider.state('followers', {
			url: "/followers",
			controller: 'FollowersCtrl',
			templateUrl: "app/components/followers/followers.html"
		});
	}
})();