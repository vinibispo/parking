angular.module('account.controllers', [])

.controller('AccountCtrl', ['$scope', '$http', '$state',function($scope, $http, $state) {
  if(!localStorage.getItem('user')){
    $state.go('login')
  }
  $scope.settings = {
    enableFriends: true
  };
}]);
