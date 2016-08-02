var app = angular.module('angularTutorial', []);
app.controller('myController', function($scope, $http) {
  $scope.data = [];
  var request = $http.get('/data');
  request.success(function(data) { 
    $scope.data = data
  });

  request.error(function(error) {
    console.error(error);
  });
});
