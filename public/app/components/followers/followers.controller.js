(function() {
  'use strict';
  
  followersModule.controller('FollowersCtrl', ['$scope', '$http', 'followerService', FollowersCtrl]);  
  
  function FollowersCtrl($scope, $http, followerService) {
    $scope.view = {
		isLoading: true,
		user: 'jashkenas'
	};
		
	$scope.followers = [];
	$scope.displayedFollowers = [];
	
	$scope.reload = reload;
	$scope.reloadFollowers = reloadFollowers;
	
	function reload() {
		reloadFollowers($scope.tableState);
	}
	
	function reloadFollowers(tableState) {
		var localStart = tableState.pagination.start % 30;
			
		if (localStart === 0) {
			$scope.view.isLoading = true;
			
			var page = tableState.pagination.start / 30 + 1;
			
			followerService.fetchFollowers($scope.view.user, page).then(function() {
				$scope.followers = followerService.getFollowers();
				$scope.displayedFollowers = $scope.followers.slice(tableState.pagination.start % 30, 10);
				tableState.pagination.numberOfPages = followerService.getNumberOfDisplayedPages();
				tableState.pagination.number = $scope.followers.length > 10 ? 10 : $scope.followers.length;
				
				$scope.view.isLoading = false;
			});					
		} else {
			$scope.displayedFollowers = $scope.followers.slice(localStart, localStart + 10);
		}
		
		$scope.tableState = tableState;
	}
  }
})();

