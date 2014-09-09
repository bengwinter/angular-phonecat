angular.module('phonecatApp')
  .directive('phoneList', function () {
    return { 
      templateUrl: '/app/phone-list/phone-list.html',
      restrict: 'E'
    };
  });

