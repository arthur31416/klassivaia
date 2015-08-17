'use strict';

angular.module('app.pieces.recommended.service', [])

.factory('RecommendedPieces', function(Playlists) {
  var recommendedPieces = Playlists.all();

  return {
    all: function() {
      return recommendedPieces;
    },
    remove: function(recommendedPiece) {
      recommendedPieces.splice(recommendedPieces.indexOf(recommendedPiece), 1);
    },
    get: function(recommendedPieceId) {
      for (var i = 0; i < recommendedPieces.length; i++) {
        if (recommendedPieces[i].id === parseInt(recommendedPieceId)) {
          return recommendedPieces[i];
        }
      }
      return null;
    },
    getCover: function(recommendedPiece) {
      return Playlists.getCover(recommendedPiece);
    }
  };
});
