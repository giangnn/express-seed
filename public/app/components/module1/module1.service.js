(function() {
	'use strict';
	
	module1.service('module1Service', ['$http', '$q', module1Service]);
	
	function module1Service($http, $q) {
		var foo;		
		
		function getFoo() {
			return foo;
		}
		
		function setFoo(value) {
			foo = value;
		}
		
		function getUsers() {
			return $q(function(resolve, reject) {
				$http.get('api/users').success(function(response) {
					resolve(response);
				}).error(function(err) {
					reject(err);
				});
			});
		}				
		
		return {
			getFoo: getFoo,
			setFoo: setFoo,
			getUsers: getUsers
		};
	}
})();