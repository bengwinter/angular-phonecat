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
      $scope.phones.splice(index, 1);
      console.log(index);
    }

    //function for adding phones//
    $scope.addPhone = function() {
      $scope.newPhone.id = $scope.newPhone.name.toLowerCase().split(' ').join('-');

      var maxPhoneAge = 0;
      for (var i = 0; i < $scope.phones.length - 1; i++) {
        if ($scope.phones[i].age > maxPhoneAge) {
          maxPhoneAge = $scope.phones[i].age;
        }
      }

      $scope.newPhone.age = maxPhoneAge + 1;
      $scope.phones.push($scope.newPhone);
      $scope.newPhone = null;
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
