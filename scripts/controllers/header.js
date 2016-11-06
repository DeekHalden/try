(function() {
    'use strict';

    angular.module('test')
        .controller('NavController', HeaderController);
    HeaderController.$inject = ['$state'];


    function HeaderController($state) {
        var vm = this;

        vm.stateis = function(curstate) {
            return $state.is(curstate);
        };

        

    }



})()
