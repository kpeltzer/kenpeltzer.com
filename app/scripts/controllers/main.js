'use strict';

angular.module('kenpeltzer')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.backToHome = function () {
      $location.path('/');
    };

  }]);
