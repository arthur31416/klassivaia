'use strict';

angular.module('app.shared.Composers', [])

.factory('Composers', function(Pieces) {
  var composers = [{
    id: 0,
    fullName: 'Ludwig van Beethoven',
    lastName: 'Beethoven',
    dateBirth: 1700,
    dateDeath: 1800,
  }, {
    id: 1,
    fullName: 'Erik Satie',
    lastName: 'Satie',
    dateBirth: 1800,
    dateDeath: 1900,
  }, {
    id: 2,
    fullName: 'Sergeï Rachmaninoff',
    lastName: 'Rachmaninoff',
    dateBirth: 1873,
    dateDeath: 1943,
  }];

  return {
    all: function() {
      return composers;
    },
    get: function(composerId) {
      for (var i = 0; i < composers.length; i++) {
        if (composers[i].id === parseInt(composerId)) {
          return composers[i];
        }
      }
      return null;
    },
    getComposers: function(piecesId) {
      var composersString = [];

      for (var i = 0; i < piecesId.length; i++) {
        for (var j = 0; j < composers.length; j++) {
          // get composer ID from a piece ID
          var pieceComposerId = Pieces.get(piecesId[i]).composerId;
          if (composers[j].id === pieceComposerId) {
            composersString.push(composers[j].lastName);
          }
        }
      }

      // return a set of unique composers
      var uniqueComposersString = composersString.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
      return uniqueComposersString;
    }
  };

});
