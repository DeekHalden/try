(function() {
    'use strict';

    angular.module('test')
        .controller('HeaderController', HeaderController);
    HeaderController.$inject = ['$state','$scope'];

    function HeaderController($state,$scope) {
        

        $scope.stateis = function(curstate) {
            return $state.is(curstate);
        };
    }



})()
