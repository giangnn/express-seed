var app = (function() {
  'use strict';
  
  return angular.module('app', [
    'ui.router',
    'app.module1',
    'app.followers'
  ]).
  
  config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/module1");
  }]);
})();