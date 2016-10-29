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

    OverviewFunction.$inject = ['$state'];

    function OverviewFunction($state) {
        var vm = this;

        vm.showId = 0;
        vm.mapId = 0;

        vm.showMap = function(index) {
            console.log(index);
            vm.mapId = index;
        }

        vm.showInfo = function(day,location) {
            console.log(day , location);
             vm.showId = day + '' + location;
                 }
       



        vm.expert = {
            name: "Audrey Tautou",
            rating: 3,
            overview: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Crypto-towards grenade computer order-flow j-pop disposable receding cyber-gang boat urban 8-bit numinous franchise. Euro-pop sentient shoes gang-ware drugs cartel voodoo god urban. Vehicle nodality shrine systema geodesic refrigerator hacker pistol RAF warehouse skyscraper office j-pop into saturation point weathered nodal point.',
                'Sprawl wonton soup rebar tanto BASE jump gang tower fetishism marketing geodesic human engine towards futurity numinous. Network table tiger-team garage neon soul-delay denim paranoid sentient Legba. Sub-orbital engine tattoo dome cardboard vinyl decay courier skyscraper tanto narrative otaku long-chain hydrocarbons gang apophenia claymore mine neural. Futurity monofilament tank-traps beef noodles stimulate tiger-team faded sunglasses drugs courier 8-bit apophenia 3D-printed.'
            ],
            badges: [{
                first: 'Budget',
                second: 'Luxury',
                value: 80
            }, {
                first: 'Relaxed',
                second: 'Active',
                value: 60
            }, {
                first: 'Desolate',
                second: 'Crowdy',
                value: 50
            }]
        }

        vm.days = [{
            day: 1,
            locations: [{
                time: '10.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'http://photos.wikimapia.org/p/00/02/98/16/39_big.jpg',
                alt: 'Welcome to Fabulous Las Vegas',
                index: 1,
                coords: [
                    36.0455, -115.1022
                ]

            }, {
                time: '15.00',
                description: 'Fluidity convenience store nodality systema dolphin garage footage courier into hotdog 3D-printed plastic bomb car saturation point. Meta-nano-saturation point stimulate papier-mache rifle math-katana advert into. Pistol faded nodal point render-farm bridge math-savant table jeans 3D-printed. Wristwatch tube vehicle otaku assault order-flow pre. Motion decay computer assault pre-jeans artisanal sub-orbital shrine sprawl refrigerator systemic. Girl assassin Legba face forwards concrete dome alcohol youtube industrial grade city gang-space rain stimulate chrome. Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'http://loveopium.ru/content/2013/05/fountains/18big.jpg',
                alt: 'Las Vegas, Ceasars Palace',
                index: 2,
                coords: [
                    35.9739, -114.8958
                ]
            }, {
                time: '16.00',
                description: 'Marketing face forwards convenience store 8-bit alcohol corrupted saturation point military-grade jeans tiger-team sub-orbital. Corporation cartel garage RAF uplink disposable car BASE jump otaku hacker systema convenience store camera neon youtube. Towards assault tank-traps physical man denim city chrome wristwatch. Digital corrupted faded apophenia footage denim futurity city tiger-team Tokyo narrative tanto tank-traps claymore mine. Digital singularity construct-space warehouse assault motion DIY rifle pistol wristwatch. Refrigerator urban fetishism pistol into towards car numinous corporation DIY j-pop computer saturation point sign apophenia kanji. Free-market dome pistol-ware ablative Shibuya rifle neural order-flow Chiba physical refrigerator. Wristwatch saturation point courier BASE jump construct singularity pistol car carbon modem savant tattoo shanty town shrine systema skyscraper rain. Free-market refrigerator sunglasses shrine geodesic marketing tower dolphin. Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/61/a7/d4/gondola-rides-at-the.jpg',
                alt: 'The Venetian, 3355 S Las Vegas Blvd, Las Vegas, NV 89109',
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
                image: 'http://photos.wikimapia.org/p/00/02/98/16/39_big.jpg',
                alt: 'Kiev, Ukraine',
                index: 1,
                coords: [
                    50.4501,
                    30.5234
                ]
            }, {
                time: '15.00',
                description: 'Fluidity convenience store nodality systema dolphin garage footage courier into hotdog 3D-printed plastic bomb car saturation point. Meta-nano-saturation point stimulate papier-mache rifle math-katana advert into. Pistol faded nodal point render-farm bridge math-savant table jeans 3D-printed. Wristwatch tube vehicle otaku assault order-flow pre. Motion decay computer assault pre-jeans artisanal sub-orbital shrine sprawl refrigerator systemic. Girl assassin Legba face forwards concrete dome alcohol youtube industrial grade city gang-space rain stimulate chrome. Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'http://loveopium.ru/content/2013/05/fountains/18big.jpg',
                alt: 'Dnipro, Ukraine',
                index: 2,
                coords: [
                    48.4647,
                    35.0462
                ]
            }, {
                time: '16.00',
                description: 'Marketing face forwards convenience store 8-bit alcohol corrupted saturation point military-grade jeans tiger-team sub-orbital. Corporation cartel garage RAF uplink disposable car BASE jump otaku hacker systema convenience store camera neon youtube. Towards assault tank-traps physical man denim city chrome wristwatch. Digital corrupted faded apophenia footage denim futurity city tiger-team Tokyo narrative tanto tank-traps claymore mine. Digital singularity construct-space warehouse assault motion DIY rifle pistol wristwatch. Refrigerator urban fetishism pistol into towards car numinous corporation DIY j-pop computer saturation point sign apophenia kanji. Free-market dome pistol-ware ablative Shibuya rifle neural order-flow Chiba physical refrigerator. Wristwatch saturation point courier BASE jump construct singularity pistol car carbon modem savant tattoo shanty town shrine systema skyscraper rain. Free-market refrigerator sunglasses shrine geodesic marketing tower dolphin. Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/61/a7/d4/gondola-rides-at-the.jpg',
                alt: 'Berdyansk, Ukraine',
                index: 3,
                coords: [
                    46.7584,
                    36.8081
                ]
            }]
        }, {
            day: 3,
            locations: [{
                time: '10.00',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'http://photos.wikimapia.org/p/00/02/98/16/39_big.jpg',
                alt: 'Stambul',
                index: 1,
                coords: [
                    41.015137, 28.979530
                ]

            }, {
                time: '15.00',
                description: 'Fluidity convenience store nodality systema dolphin garage footage courier into hotdog 3D-printed plastic bomb car saturation point. Meta-nano-saturation point stimulate papier-mache rifle math-katana advert into. Pistol faded nodal point render-farm bridge math-savant table jeans 3D-printed. Wristwatch tube vehicle otaku assault order-flow pre. Motion decay computer assault pre-jeans artisanal sub-orbital shrine sprawl refrigerator systemic. Girl assassin Legba face forwards concrete dome alcohol youtube industrial grade city gang-space rain stimulate chrome. Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'http://loveopium.ru/content/2013/05/fountains/18big.jpg',
                alt: 'Sofia, Bulgaria',
                index: 2,
                coords: [
                    42.6965,
                    23.326
                ]
            }, {
                time: '16.00',
                description: 'Marketing face forwards convenience store 8-bit alcohol corrupted saturation point military-grade jeans tiger-team sub-orbital. Corporation cartel garage RAF uplink disposable car BASE jump otaku hacker systema convenience store camera neon youtube. Towards assault tank-traps physical man denim city chrome wristwatch. Digital corrupted faded apophenia footage denim futurity city tiger-team Tokyo narrative tanto tank-traps claymore mine. Digital singularity construct-space warehouse assault motion DIY rifle pistol wristwatch. Refrigerator urban fetishism pistol into towards car numinous corporation DIY j-pop computer saturation point sign apophenia kanji. Free-market dome pistol-ware ablative Shibuya rifle neural order-flow Chiba physical refrigerator. Wristwatch saturation point courier BASE jump construct singularity pistol car carbon modem savant tattoo shanty town shrine systema skyscraper rain. Free-market refrigerator sunglasses shrine geodesic marketing tower dolphin. Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/61/a7/d4/gondola-rides-at-the.jpg',
                alt: 'Lviv, Ukraine',
                index: 3,
                coords: [
                    49.8397,
                    24.0297
                ]
            }]
        }]



        // vm.showDetails = function(e, location, day) {
        //     // vm.hideDetail();

        //     vm.location = location;
        //     var index = 'foo-iw' + day.index;
        //     vm.map.showInfoWindow(index, location.alt);
        //     console.log(vm.map);
        //     console.log(location.alt);

        // };
        // vm.hideDetail = function() {
        //     vm.map.hideInfoWindow();
        // };
    }


})()
