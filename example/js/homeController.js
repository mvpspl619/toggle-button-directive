'use strict';

angular.module('angularGruntSeed')

.controller('homeController', ['$scope',
    function($scope, gridService) {
        $scope.switchedOn = false;
    }
]);
