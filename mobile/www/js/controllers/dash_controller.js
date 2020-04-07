angular.module('dash.controllers', [])

.controller('DashCtrl', ['$scope', '$http', '$state',function($scope, $http, $state) {
  if(!localStorage.getItem('user')){
    $state.go("login")
  }
}]);

