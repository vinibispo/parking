angular.module('account.controllers', [])

.controller('AccountCtrl', ['$scope', '$http', '$state',function($scope, $http, $state) {
  const user = localStorage.getItem('user')
  $scope.user = JSON.parse(user)
  $scope.user.money = Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format($scope.user.money)
  $scope.user.createdAt = moment($scope.user.createdAt).format('DD/MM/YYYY')
  $scope.user.updatedAt = moment($scope.user.updatedAt).format('DD/MM/YYYY')
  if(!localStorage.getItem('user')){
    $state.go('login')
  }
}]);
