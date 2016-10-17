angular.module("dogApp").controller("mainCtrl", function($scope, mainServ){

$scope.test="what";
$scope.dogList = mainServ.getDogs;
// $scope.dogAdd = mainServ.postDogs;
// $scope.dogChange = mainServ.changeDogs;
// $scope.noooooo = mainServ.deleteDogs;

});
