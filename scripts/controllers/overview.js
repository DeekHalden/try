(function() {
    /**
     * @ngdoc function
     * @name testApp.controller:OverviewConroller
     * @description
     * # OverviewConroller
     * Controller of the testApp
     */

    'use strict';
    angular.module('test')
        .controller('OverviewController', OverviewFunction);

    OverviewFunction.$inject = ['$state', '$http', '$window', 'OverviewService'];

    function OverviewFunction($state, $http, $window, OverviewService) {
        // local vars



        // global vars
        var vm = this;
        vm.showMap = showMap;
        vm.showInfo = showInfo;

        vm.includeDesktopTemplate = false;
        vm.includeMobileTemplate = false;
        var screenWidth = $window.innerWidth;

        if (screenWidth <= 991) {
            vm.includeMobileTemplate = true;
        } else {
            vm.includeDesktopTemplate = true;
        }



        vm.showId = 0;
        vm.mapId = 0;

        vm.expert = {
            name: "Audrey Tautou",
            rating: 3,
            overview: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Crypto-towards grenade computer order-flow j-pop disposable receding cyber-gang boat urban 8-bit numinous franchise. Euro-pop sentient shoes gang-ware drugs cartel voodoo god urban. Vehicle nodality shrine systema geodesic refrigerator hacker pistol RAF warehouse skyscraper office j-pop into saturation point weathered nodal point.',
                'Sprawl wonton soup rebar tanto BASE jump gang tower fetishism marketing geodesic human engine towards futurity numinous. Network table tiger-team garage neon soul-delay denim paranoid sentient Legba. Sub-orbital engine tattoo dome cardboard vinyl decay courier skyscraper tanto narrative otaku long-chain hydrocarbons gang apophenia claymore mine neural. Futurity monofilament tank-traps beef noodles stimulate tiger-team faded sunglasses drugs courier 8-bit apophenia 3D-printed.'
            ],
            badges: [{
                firstBadge: 'Budget',
                secondBadge: 'Luxury',
                value: 80
            }, {
                firstBadge: 'Relaxed',
                secondBadge: 'Active',
                value: 60
            }, {
                firstBadge: 'Desolate',
                secondBadge: 'Crowdy',
                value: 50
            }]
        };




        vm.days = [{
            day: 1,
            locations: [{
                time: '10.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                photo: 'http://placehold.it/1/F6F5E7',
                alt: 'Welcome to Fabulous Las Vegas',
                index: 1,
                coords: [
                    36.0455, -115.1022
                ]

            }, {
                time: '15.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                photo: 'http://placehold.it/1/F6F5E7',
                alt: 'Ceasers palace',
                index: 2,
                coords: [
                    35.9739, -114.8958
                ]
            }, {
                time: '16.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                photo: 'http://placehold.it/1/F6F5E7',
                alt: '3355 S Las Vegas Blvd',
                index: 3,
                coords: [
                    36.0711, -115.1008
                ]

            }]
        }, {
            day: 2,
            locations: [{
                time: '10.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                photo: 'http://placehold.it/1/F6F5E7',
                alt: 'Kiev,Dynamo stadium',
                index: 1,
                coords: [
                    50.23,
                    30.34
                ]
            }, {
                time: '15.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                photo: 'http://placehold.it/1/F6F5E7',
                alt: 'Dnipro, Arena',
                index: 2,
                coords: [
                    48.4647,
                    35.0462
                ]
            }, {
                time: '16.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                photo: 'http://placehold.it/1/F6F5E7',
                alt: 'Аквапарк',
                index: 3,
                coords: [
                    46.7202,
                    36.8231

                ]
            }]
        }, {
            day: 3,
            locations: [{
                time: '10.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                photo: 'http://placehold.it/1/F6F5E7',
                alt: 'Stambul, Stadium',
                index: 1,
                coords: [
                    41.015137, 28.979530
                ]

            }, {
                time: '15.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                photo: 'http://placehold.it/1/F6F5E7',
                alt: 'Sofia University',
                index: 2,
                coords: [
                    42.6965,
                    23.326
                ]
            }, {
                time: '16.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                photo: 'http://placehold.it/1/F6F5E7',
                alt: 'Lviv, Just Lviv It',
                index: 3,
                coords: [
                    49.8397,
                    24.0297
                ]
            }]
        }]

        function showInfo(day, location) {
            vm.showId = 0;

            var locs = vm.days[day - 1].locations[location - 1];
            return OverviewService.httpGetId(locs)
                .then(function(data) {


                    if (data.data.response.venues.length > 0) {
                        var venues = data.data.response.venues;

                        // get rand
                        // var number = getRandomInRange(0, venues.length - 1)


                        var id = venues[0].id;

                        return OverviewService.httpGetVenueById(id);

                    } else {
                        vm.locationMessage = '<p>No information found. </p>';
                        vm.showId = day + '' + location;

                    }

                })
                .then(function(data) {
                    // console.log(data);
                    var venue = data.data.response.venue;



                    if (venue.tips.groups[0].items[0]) {
                        vm.locationMessage = '<h3>' + venue.name + '</h3>' + '<p>' + venue.tips.groups[0].items[0].text + '</p><p>Click<a href="' + venue.shortUrl + '" target="_blank"> here </a>to learn more from Foursquare.</p>';

                    } else {
                        vm.locationMessage = '<h3>' + venue.name + '</h3>' + '<p>No Tips about this location.</p><p>Click<a href="' + venue.shortUrl + '" target="_blank"> here </a>to learn more form Foursquare.</p>'
                    }
                    // console.log(vm.data);
                    vm.showId = day + '' + location;

                });
        }

        vm.photos = [];




        function getPhotos(locs) {
            angular.forEach(locs, function(loc) {
                return OverviewService.httpGetId(loc)
                    .then(function(data) {
                        var id = data.data.response.venues[0].id;
                        return OverviewService.httpGetVenueById(id);

                    })
                    .then(function(data) {
                        var venue = data.data.response.venue;
                        var photo = venue.bestPhoto.prefix + '1000x1000' + venue.bestPhoto.suffix;
                        loc.photo = photo;
                        loc.description = venue.name;

                    });
            })
        };

        function showMap(index) {

            var locs = vm.days[index - 1].locations;
            getPhotos(locs);
            vm.mapId = index;
        };

        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }


})()
