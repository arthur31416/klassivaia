'use strict';

angular.module('app.pieces.recommended', [
  'app.pieces.recommended.service',
  'app.pieces.pieces-details'
])

.controller('RecommendedCtrl', function($scope, RecommendedPieces, Composers) {
  $scope.recommendedPieces = RecommendedPieces.all();

  $scope.remove = function(recommendedPiece) {
    RecommendedPieces.remove(recommendedPiece);
  };

  $scope.getCover = function(recommendedPiece) {
    return RecommendedPieces.getCover(recommendedPiece);
  };

  $scope.getComposers = function(recommendedPiece) {
    var listComposers = Composers.getComposers(recommendedPiece.piecesId);
    return listComposers.join(', ');
  }; 
});






