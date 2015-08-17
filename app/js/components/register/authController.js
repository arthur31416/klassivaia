'use strict';

app.controller('AuthCtrl', function ($scope, Auth) {
	$scope.createUser = function() {
		$scope.message = null;
		$scope.error = null;

		Auth.$createUser({
			email: $scope.email,
			password: $scope.password
			}).then(function(userData) {
				$scope.message = 'User created with uid: ' + userData.uid;
			}).catch(function(error) {
			$scope.error = error;
			console.log('erratum');
		});
	};

	$scope.removeUser = function() {
	  $scope.message = null;
	  $scope.error = null;

	  Auth.$removeUser({
	    email: $scope.email,
	    password: $scope.password
	  }).then(function() {
	    $scope.message = 'User removed';
	  }).catch(function(error) {
	    $scope.error = error;
	  });
	};
});