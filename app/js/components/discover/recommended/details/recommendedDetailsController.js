'use strict';

angular.module('app.pieces.pieces-details', [])

.controller('RecommendedDetailsCtrl', function($scope, $stateParams, RecommendedPieces, 
  Pieces, Playlists, Composers, ModalService) {

  $scope.recommendedPiece = RecommendedPieces.get($stateParams.recommendedPieceId);
  // $scope.pieces = Playlists.getPieces($scope.recommendedPiece);
  $scope.pieces = Pieces.getEach(Playlists.getPieces($scope.recommendedPiece));
  
  // e.g. a Beethoven sonata has 3 tracks
  $scope.isSingleTrack = function(piece) {
  	return Playlists.get(piece.playlistId).piecesId.length === 1;
  };

  $scope.getPlaylist = function(piece) {
  	return Playlists.get(piece.playlistId);
  };

  $scope.getComposer = function(piece) {
  	return Composers.get(piece.composerId);
  };

  $scope.modalVideo = function(piece) {
    ModalService
      .init('js/components/shared/modalPieces/modalPiecesView.html', $scope, piece)
      .then(function(modal) {
        modal.show();
      });
  };
});


