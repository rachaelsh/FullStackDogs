angular.module("dogApp").controller("mainCtrl", function($scope, mainServ){

 // $scope.test="what";
$scope.getDogs = function(){
  mainServ.getDogs()
  .then(function(response){
    $scope.dogList = response;
    console.log(response);
  });
};
$scope.getDogs();

});

// $scope.postDogs = function(){
//   mainServ.postDogs()
//   .then(function(response){
//     $scope.dogList = response;
//     console.log(response);
//   });
// };
// $scope.postDogs();
// });


// $scope.putDogs = function(){
//   mainServ.putDogs()
//   .then(function(response){
//     $scope.dogList = response;
//     console.log(response);
//   });
// };
// $scope.putDogs();
// });
// $scope.deleteDogs = function(){
//   mainServ.postDogs()
//   .then(function(response){
//     $scope.dogList = response;
//     console.log(response);
//   });
// };
// $scope.deleteDogs();
// });
