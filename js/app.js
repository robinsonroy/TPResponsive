var app = angular.module('app',[]);
app.controller('appController', function($scope){
  $scope.cities = cities;

  $scope.searchValue = '';

  $scope.search = function(searchValue){
    var cityShown = [];

    if(this.searchValue != '')
    {
      for (var city in this.cities)
      {
        if (city.name == this.searchValue)
        {
          cityShown.push(city);
        }
        else {

        }
      }
    }
    else{
      cityShown=cities;
      }

      console.log("city : "+ cityShown);

    return cityShown;
  }


});
