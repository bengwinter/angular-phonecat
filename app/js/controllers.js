'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';

    //function for deleting phones//
    $scope.deletePhone = function(phone) {
      // console.log(phone.age);
      // console.log($scope.phones);
      var index = 0;
      for (var i = 0; i < $scope.phones.length - 1; i++) {
        if ($scope.phones[i].id === phone.id) {
          index = i;
          break;
        }
      }
      console.log(index);
      $scope.phones.splice(index, 1);
    }

  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
