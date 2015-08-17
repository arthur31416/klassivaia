'use strict';

angular.module('app.shared.Playlists', [])

.factory('Playlists', function(Pieces) {
  var playlists = [{
    id: 0,
    piecesId: [0,1,2],
    name: '3 Gymnopédies',
    dateComposition: '1888',
    instrumentation: 'Piano (solo)'
  }, {
    id: 1,
    piecesId: [3],
    name: 'Variations on a Theme of Chopin, Op.22',
    dateComposition: '1902–03',
    instrumentation: 'Piano (solo)'
  }, {
    id: 2,
    piecesId: [0,1,2,3],
    name: 'A bit of everything 1',
    dateComposition: '',
    instrumentation: ''
  }, {
    id: 3,
    piecesId: [0,1,2,3],
    name: 'A bit of everything 2',
    dateComposition: '',
    instrumentation: ''
  }, {
    id: 4,
    piecesId: [0,1,2,3],
    name: 'A bit of everything 3',
    dateComposition: '',
    instrumentation: ''
  }, {
    id: 5,
    piecesId: [0,1,2,3],
    name: 'A bit of everything 4',
    dateComposition: '',
    instrumentation: ''
  }, {
    id: 6,
    piecesId: [0,1,2,3],
    name: 'A bit of everything 5',
    dateComposition: '',
    instrumentation: ''
  }, {
    id: 7,
    piecesId: [0,1,2,3],
    name: 'A bit of everything 6',
    dateComposition: '',
    instrumentation: ''
  }];

  // var composers = Composers.all();
  // var pieces = Pieces.all();

  return {
    all: function() {
      return playlists;
    },
    get: function(playlistId) {
      for (var i = 0; i < playlists.length; i++) {
        if (playlists[i].id === parseInt(playlistId)) {
          return playlists[i];
        }
      }
      return null;
    },
    getCover: function(playlist) {
      // on renvoie la cover de la 1ere piste...
      if (playlist) {
        return Pieces.get(playlist.piecesId[0]).youtubeCover;
      }

      return '';
    },
    getPieces: function(playlist) {
      if (playlist) {
        return playlist.piecesId;
      }

      return null;
    }
  };
});
