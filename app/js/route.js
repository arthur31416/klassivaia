'use strict';

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
app.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'js/components/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.pieces', {
      url: '/discover',
      abstract: true,
      // templateUrl: 'js/components/pieces/piecesView.html'
      views: {
        'tab-pieces': {
          templateUrl: 'js/components/discover/discoverView.html',
          controller: 'DiscoverCtrl'
        }
      },
      activetab: ''
    })
    .state('tab.pieces.recommended', {
      url: '/recommended',
      views: {
        'tab-pieces-content': {
          templateUrl: 'js/components/discover/recommended/recommendedView.html',
          controller: 'RecommendedCtrl'
        }
      }
    })
    .state('tab.pieces.watched', {
      url: '/watched',
      views: {
        'tab-pieces-content': {
          templateUrl: 'js/components/discover/watched/watchedView.html',
          controller: 'WatchedCtrl'
        }
      }
    })

    .state('tab.pieces.pieces-details', {
      url: '/recommended/:recommendedPieceId',
      views: {
        'tab-pieces-content': {
          templateUrl: 'js/components/discover/recommended/details/recommendedDetailsView.html',
          controller: 'RecommendedDetailsCtrl'
        }
      }
    })

    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'js/components/profile/profileView.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('tab.register', {
      url: '/register',
      views: {
        'tab-profile': {
          templateUrl: 'js/components/register/register.html',
          controller: 'AuthCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback


    // $routeProvider
    // .when('/register', {
    //   templateUrl: 'js/components/register/register.html',
    //   controller: 'AuthCtrl',
    //   resolve: {
    //     user: function(Auth) {
    //       return Auth.resolveUser();
    //     }
    //   }
    // });

    $urlRouterProvider.otherwise('/tab/discover/recommended');

});
