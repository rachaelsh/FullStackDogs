angular.module("dogApp").service("mainServ", function($http){

this.getDogs = function(){
  return $http({
    method: "GET",
    url: "/dogs"
  }).then(function(response){
    return response.data;
  });
//
// this.postDogs = function(){
//   return $http({
//     method: "POST",
//     url: "/dogs"
//   }).then(function(response){
//     return response.data;
//   });
//
//   this.putDogs = function(){
//     return $http({
//       method: "PUT",
//       url: "/dogs/:id"
//     }).then(function(response){
//
//
//       return response.data;
//     });
//
//   this.deleteDogs = function(){
//     return $http({
//       method: "DELETE",
//       url: "/dogs/:id"
//     }).then(function(response){
//
//
//
//       // return response.data;
//     });

};






});
