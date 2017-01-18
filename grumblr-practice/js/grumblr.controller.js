(function(){
  angular
    .module('grumblr')
    .controller('GrumbleCtrl', GrumbleCtrl);

  GrumbleCtrl.$inject = ['$http', '$scope'];

  function GrumbleCtrl($http, $scope){
    var rootURL = 'http://localhost:3000';
    // var self = this;  // not needed because of $scope

    // this is my index
    $scope.getGrumbles = function(){  // not needed because $http.get gets called immediately  // now it's needed lol
      $http.get(`${rootURL}/grumbles`)
        .then(function(res){
          $scope.grumbles = res.data;
          console.log($scope.grumbles);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    }; //getGrumbles

    // this is my show
    $scope.showGrumble = function(id){
      $http.get(`${rootURL}/grumbles/${id}`)
        .then(function(res){
          $scope.grumble = res.data;
          console.log($scope.grumble);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    }; // showGrumble

    // this is my delete
    $scope.destroyGrumble = function(id){
      $http.delete(`${rootURL}/grumbles/${id}`)
        .then(function(res){
          $scope.grumble = undefined;
          $scope.getGrumbles();
          console.log($scope.grumble);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    }; //destroyGrumble

    $scope.createGrumble = function(grumble){
      $http.post(`${rootURL}/grumbles`, grumble)
        .then(function(res){
          $scope.grumbles = res.data;
          console.log($scope.grumbles);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    }; //createGrumble

    // this.getGrumbles();

  } // GrumbleCtrl
})();
