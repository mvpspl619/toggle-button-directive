'use strict';

angular.module('toggleButtonPage', [
    'toggleButton'
]);

angular.module('toggleButtonPage')
.controller('defaultController', ['$scope',
    function($scope, gridService) {
        $scope.switchedOn = false;
    }
]);