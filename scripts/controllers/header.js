(function() {
    'use strict';

    angular.module('test')
        .controller('NavController', HeaderController);
    HeaderController.$inject = ['$state', '$scope'];

    function HeaderController($state, $scope) {


        $scope.stateis = function(curstate) {
            return $state.is(curstate);
        };

        $scope.class = 'in';
        $scope.toggleClass = function() {
            if ($scope.class === "out")
                $scope.class = "in";
            else {
                $scope.class = "out";
            
            }
        }

    }



})()
