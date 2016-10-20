angular.module("dogApp").service("mainServ", function($http){

this.getDogs = function(){
  return $http({
    method: "GET",
    url: "/dogs"
  }).then(function(response){
    console.log(response.data);
    return response.data;
  });
};

this.postDogs = function(newDog){
  console.log(newDog);
  return $http({
    method: "POST",
    url: "/dogs",
    data: newDog
  }).then(function(response){
    console.log(response.data);
    return response;
  });
};

  this.putDogs = function(editDog){
    return $http({
      method: "PUT",
      url: "/dogs/" + editDog.key,
      data: editDog
    }).then(function(response){
      return response;
    });
  };

  this.deleteDogs = function(goneDog){
    return $http({
      method: "DELETE",
      url: "/dogs/" + goneDog.key
    }).then(function(response){
            console.log(goneDog);
      return response;
    });
  };

});//ends service - keep at bottom
