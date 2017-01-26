myApp.controller('RegistrationController', ['$scope', function($scope) {
  //$scope.message = "Welcome Home";

  $scope.login = function(){
  	$scope.message = "Welcome " + $scope.user.email
  	+ " " + $scope.user.password;
  	//
  };

  $scope.register = function() {
   $scope.message = "Welcome " + $scope.user.firstname + " " + $scope.user.lastname;
  };

}]);