angular.module("dogApp").controller("mainCtrl", function($scope, mainServ){

 // $scope.test="what";
  $scope.getDogs = function(){
    mainServ.getDogs()
    .then(function(response){
      $scope.dogList = response;
      console.log(response);
    });
  };

  $scope.postDogs = function(newDog){
    console.log(newDog);
    mainServ.postDogs(newDog)
    .then(function(response){
      $scope.newDog.name = "";
      $scope.newDog.breed = "";
      $scope.getDogs();
      console.log(response);
    });
  };

  $scope.putDogs = function(editDog){
    mainServ.putDogs(editDog)
    .then(function(response){
      console.log(response);
      $scope.getDogs();
    });
  };

  $scope.deleteDogs = function(goneDog){
    console.log("main")
    mainServ.deleteDogs(goneDog)
    .then(function(response){
      $scope.getDogs();
      console.log(response);
    });
  };
});//end controller. Keep at bottom
