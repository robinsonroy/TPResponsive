var app = angular.module('app',[]);
app.controller('appController', function($scope){
  $scope.cities = cities;

  $scope.searchValue = 'Paris';

  $scope.search = function(searchValue){
    var cityShown = [];
    for (var city in this.cities)
    {
      if(this.searchValue != '')
      {
        if (city.name == this.searchValue)
        {
          cityShown = city;
        }
        else {

        }
      }
      else{
        cityShown=cities;
      }

      console.log("city : "+ cityShown);
    }
    return cityShown;
  }


});
