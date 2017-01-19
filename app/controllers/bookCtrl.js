app.controller("BookCtrl", function ($scope,guideFactory){
  guideFactory.getList()
  .then((value)=> {
    console.log(value)
    $scope.books = value
  })
})
