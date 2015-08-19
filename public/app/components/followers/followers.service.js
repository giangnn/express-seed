(function() {
	'use strict';
	
	followersModule.service('followerService', ['$q', '$http', followerService]);
	
	function followerService($q, $http) {
		
		var followers;
		var linkHeader;
		
		function getFollowers() {
			return followers;
		}
		
		function fetchFollowers(username, page) {
			return $q(function(resolve, reject) {
				$http.get('https://api.github.com/users/' + username + '/followers?page=' + page).success(function(response, status, headers) {
					followers = response;
					linkHeader = headers('Link');
					resolve();
				}).error(function(err, status) {
					reject(err, status);
				});
			});
		}
		
		function getNumberOfDisplayedPages() {
			var links = linkHeader.split(',');
			var lastPattern = ">; rel=\"last\"";
			var lastLink = _.find(links, function(link) {
				return link.indexOf(lastPattern, link.length - lastPattern.length) !== -1;
			}); // something like <https://api.github.com/user/4732/followers?page=269>; rel="last"
			lastLink = lastLink.substr(0, lastLink.length-lastPattern.length); // something like <https://api.github.com/user/4732/followers?page=269
			lastLink = lastLink.substr(lastLink.indexOf("=") + 1); // something like 269
			return Number(lastLink) * 3;
		}
		
		return {
			getFollowers: getFollowers,
			fetchFollowers: fetchFollowers,
			getNumberOfDisplayedPages: getNumberOfDisplayedPages			
		}
	}
})();