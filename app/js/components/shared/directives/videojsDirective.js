'use strict';

app.directive('youtubevideo', function () {
  return {
    template: '<video id="idTest" class="video-js vjs-default-skin" controls preload="true" width="640" height="360" data-setup=\'{"techOrder":["youtube","html5"],"ytcontrols":false}\'><source videojs type=\'video/youtube\' /></video>',
    restrict: 'E',
  //   controller: function() {
		// var myPlayer = "";

		// videojs("idTest", {}, function() {
		// 	// Player (this) is initialized and ready.
		// 	myPlayer = this;
		// 	console.log('1 - ');
		// 	console.log(myPlayer);
		// 	this.poster(piece.youtubeCover);
		// 	this.src({ type: "video/youtube", src: piece.youtubeUrl });
		// 	myPlayer.play();
		// });
  //   }
  };
});
