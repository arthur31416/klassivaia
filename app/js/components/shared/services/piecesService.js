'use strict';

angular.module('app.shared.Pieces', [])

.factory('Pieces', function() {
  var pieces = [{
    id: 0,
    playlistId: 0, // unique - reference to the actual piece (not a random playlist...)
    composerId: 1,
    name: 'Lent et douloureux',
    key: 'D major / D minor',
    youtubeUrl: 'https://youtu.be/aUaFH2h61J0',
    youtubeCover: 'https://i.ytimg.com/vi/aUaFH2h61J0/hqdefault.jpg'
  }, {
    id: 1,
    playlistId: 0,
    composerId: 1,
    name: 'Lent et triste',
    key: 'D major / D minor',
    youtubeUrl: 'https://youtu.be/Av31vk4613M',
    youtubeCover: 'https://i.ytimg.com/vi/Av31vk4613M/hqdefault.jpg'
  }, {
    id: 2,
    playlistId: 0,
    composerId: 1,
    name: 'Lent et grave',
    key: 'D major / D minor',
    youtubeUrl: 'https://youtu.be/vOVYp4GXwQE',
    youtubeCover: 'https://i.ytimg.com/vi/vOVYp4GXwQE/hqdefault.jpg'
  }, {
    id: 3,
    playlistId: 1,
    composerId: 2,
    name: 'Variations on a Theme of Chopin, Op.22',
    key: 'C minor',
    youtubeUrl: 'https://youtu.be/94fhvjO-glk',
    youtubeCover: 'https://i.ytimg.com/vi/94fhvjO-glk/hqdefault.jpg'
  }];

  // var compositions = Compositions.all();

  return {
    all: function() {
      return pieces;
    },
    get: function(pieceId) {
      for (var i = 0; i < pieces.length; i++) {
        if (pieces[i].id === parseInt(pieceId)) {
          return pieces[i];
        }
      }
      return null;
    },
    getEach: function(pieceId) {
      // manage the case when pieceId is an array of ids
      var correspondingPieces = [];

      for (var i = 0; i < pieceId.length; i++) {
        for (var j = 0; j < pieces.length; j++) {
          if (pieces[j].id === parseInt(pieceId[i])) {
            correspondingPieces.push(pieces[j]);
          }
        }
      }

      return correspondingPieces;
    }
  };
});
