app.factory("guideFactory", function ($http){
  return {
    getList : () => {
      return $http.get(`/data/guides.json`)
      .then ((value) => {
        console.log(value.data.guides)
        return value.data.guides
      })
    }
  }
})
