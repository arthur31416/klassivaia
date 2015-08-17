'use strict';

angular.module('app.shared.ModalService', [])

.service('ModalService', function($ionicModal, $rootScope) {
	var init = function(tpl, $scope, piece) {
		var promise;
		$scope = $scope || $rootScope.$new();

		promise = $ionicModal.fromTemplateUrl(tpl, {
		  scope: $scope,
		  animation: 'slide-in-up'
		}).then(function(modal) {
		  $scope.modal = modal;
		  return modal;
		});

		$scope.openModal = function() {
			$scope.currentPiece = piece;
			$scope.modal.show();
		};

		var myPlayer = '';

		$scope.$on('modal.shown', function() {
			console.log('Modal is shown!');
			// myPlayer = "";`
			videojs('idTest', {}, function() {
				// Player (this) is initialized and ready.
				myPlayer = this;
				console.log('1 - ');
				this.poster(piece.youtubeCover);
				this.src({ type: 'video/youtube', src: piece.youtubeUrl });
				myPlayer.play();
		    });
		});

		$scope.$on('modal.hidden', function() {
			console.log('Modal is hidden!');
			// myPlayer.pause();
			myPlayer.dispose();
		});

		$scope.closeModal = function() {
			$scope.modal.hide();
		};

		$scope.$on('$destroy', function() {
			$scope.modal.remove();
			console.log('Kill da video !!!');
			myPlayer.dispose();
		});

		return promise;
	};

	return {
		init: init
	};
});




// $ionicModal.fromTemplateUrl('js/components/shared/modalPieces/modalPiecesView.html', {
//     scope: $scope,
//     animation: 'slide-in-up'
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });

//   var myPlayer = "";

//   $scope.openModal = function(piece) {
//     $scope.currentPiece = piece;
//     $scope.modal.show();
//     // myPlayer.src(piece.youtubeUrl);
//     // console.log("modal opened");
//     videojs("idTest", {}, function() {
//       // Player (this) is initialized and ready.
//       myPlayer = this;
//       console.log('1 - ');
//       console.log(myPlayer);
//       this.poser(piece.youtubeCover);
//       this.src({ type: "video/youtube", src: piece.youtubeUrl });
//       myPlayer.play();
//     });
//   };

//   $scope.$on('modal.shown', function() {
//     console.log('Modal is shown!');
//   });

//   $scope.$on('modal.hidden', function() {
//     console.log('Modal is hidden!');
//     myPlayer.pause();
//   });

//   $scope.$on('$destroy', function() {
//     myPlayer.dispose();
//     console.log("Kill da video !!!");
//   });