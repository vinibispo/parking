angular.module('dash.controllers', [])

.controller('DashCtrl', ['$scope', '$http', '$state',function($scope, $http, $state) {
  if(!localStorage.getItem('user')){
    $state.go("login")
  }
  const user = (JSON.parse(localStorage.getItem('user')))
  $scope.status = user.status
  $scope.sair = function(){
    localStorage.clear()
    $state.go('login')
  }
  $scope.pay = async function(){
    alert("PAYING")
    const response = await $http.post('http://localhost:3000/pay', {board: user.board, password: user.password})
    if(response.status < 400){
      localStorage.removeItem('user')
      localStorage.setItem('user', JSON.stringify({...user, ...response.data}))
      alert('PAYED!')
      $state.go('tab.dash')
    }
  }
}]);

