(function() {
  'use strict';
  
  module1.controller('Module1Ctrl', ['$scope', 'module1Service', Module1Ctrl]);  
  
  function Module1Ctrl($scope, module1Service) {
    module1Service.setFoo('world');
    $scope.msg = module1Service.getFoo();
    module1Service.getUsers().then(function(response) {
      $scope.users = response;
    });
  }
})();

