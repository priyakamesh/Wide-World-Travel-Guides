app.controller("BookCtrl", function ($scope,$http){

  $http.get(`/data/guides.json`)
  .then (function (value){
    console.log(value.data.guides)
    $scope.books = value.data.guides
  })
})
