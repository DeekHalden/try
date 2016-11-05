(function() {
    /**
     * @ngdoc function
     * @name testApp.controller:HomeController
     * @description
     * # HomeController
     * Controller of the testApp
     */

    'use strict';
    angular.module('test')
        .controller('DetailsController', DetailsFunction);

    function DetailsFunction() {
        var vm = this;


        vm.info = [{
            time: '10.00',
            name: 'Trattoria del Ropeton',
            street: 'Via Fontana del Ferro, 1, Verona, Italy',
            description: 'Amazing owner who sings and serves the food himself! Expirience which you\'ll never forget and will include to the travel different mockups:)',
            photo: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/2d/b8/13/photo0jpg.jpg',
            bottomIcon: 'fa fa-car',
            headerIcon:'http://icon-icons.com/icons2/390/PNG/512/knife-fork_39057.png'
        }, {
            time: '11.00',
            name: 'Trattoria del Ropeton',
            street: 'Via Fontana del Ferro, 1, Verona, Italy',
            description: 'Want some Lorem? Nah, Papier-mache claymore mine nano-physical computer human order-flow ',
            photo: 'https://placekitten.com/1000',
            bottomIcon: 'fa fa-bicycle',
            headerIcon:'http://www.freeiconspng.com/uploads/basket-cart-icon-27.png'
        }, {
            time: '12.00',
            name: 'Trattoria del Ropeton',
            street: 'Via Fontana del Ferro, 1, Verona, Italy',
            description: '',
            photo: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/2d/b8/13/photo0jpg.jpg',
            bottomIcon: '',
            headerIcon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Y7KD2IY9shp6FcGJitw3l-NeSyLKa2jhP6Cas0QKq9PAlRzE'
        }]


    }

})()
