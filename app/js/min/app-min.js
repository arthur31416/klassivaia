'use strict';
/* global app:true */
/* exported app */
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', [
  'ionic',
  'firebase',
  'app.pieces',
  // 'app.watched',
  'app.profile',
  // 'app.shared.modal-pieces',
  'app.shared.Composers',
  'app.shared.Playlists',
  'app.shared.Pieces',
  'app.shared.ModalService'
])
// https://auth.firebase.com/v2/klassivaia.firebaseapp.com/auth/facebook/callback
.constant('FIREBASE_URL', 'https://klassivaia.firebaseio.com/')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
});


