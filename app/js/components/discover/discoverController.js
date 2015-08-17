'use strict';

angular.module('app.pieces', [
  'app.pieces.recommended',
  'app.pieces.watched'
  // 'app.pieces.recommended.service',
  // 'app.pieces-details'
])

.controller('DiscoverCtrl', function($scope, $location) {
  $scope.$on('$ionicView.enter', function() {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
    $scope.isAtLevelOne = function() {
      return $location.path() === '/tab/discover/recommended' || $location.path() === '/tab/discover/watched';
    };
  });
});










