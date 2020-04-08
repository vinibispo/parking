angular.module('dash.controllers', [])

.controller('DashCtrl', ['$scope', '$http', '$state', '$interval',function($scope, $http, $state, $interval) {
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
      $state.go('tab.account')
    }
  }
  const userDate = moment(user.updatedAt)
  const seconds = moment().diff(userDate, "seconds")
  $scope.seconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60
  $scope.minutes = (parseInt(seconds / 60) % 60) < 10 ? `0${(parseInt(seconds / 60) % 60)}` : (parseInt(seconds / 60) % 60)
  $scope.hours = parseInt(seconds / 3600)
  $interval(()=>{
    const seconds = moment().diff(userDate, "seconds")
    $scope.seconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60
    $scope.minutes = (parseInt(seconds / 60) % 60) < 10 ? `0${(parseInt(seconds / 60) % 60)}` : (parseInt(seconds / 60) % 60)
    $scope.hours = parseInt(seconds / 3600)
  }, 1000)
  $scope.request = async function () {
    alert("ASKING")
    const response = await $http.post('http://localhost:3000/request', {board: user.board, password: user.password})
    if(response.status < 400){
      localStorage.removeItem('user')
      localStorage.setItem('user', JSON.stringify({...user, ...response.data}))
      alert('ASKED!')
      $state.go('tab.account')
    }
  }
  $scope.count = 0
}]);

