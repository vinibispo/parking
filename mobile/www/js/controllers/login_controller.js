angular.module('login.controllers', [])

.controller('LoginCtrl',['$scope', '$http', '$state',  function($scope, $http, $state) {
  if(localStorage.getItem('user')){
    $state.go('tab.dash')
  }
  $scope.login = {
    board: '', password: ''
  }
  $scope.message = ''
  $scope.logar = async function () {
    const user= JSON.stringify($scope.login)
    const response = await $http.post('http://localhost:3000/car/login', $scope.login)
    if(response.status < 400){
      localStorage.setItem('user', user)
      $state.go('tab.dash')
    }
  }
}])
