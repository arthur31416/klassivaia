'use strict';

app.factory('Auth', function ($firebaseAuth, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  return $firebaseAuth(ref);
});
