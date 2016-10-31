(function() {
    'use strict';

    angular.module('test')
        .service('OverviewService', OverviewFunction);

    OverviewFunction.$inject = ['$http'];

    function OverviewFunction($http) {
        var vm = this;

        var clientID = "BHTTXP2QZ1D3A1LDT1JJHOQH4Y3VGXP24SHMIPHOWTLO0DVA";
        var clientSecret = "GUQA4EATBIAT4GEP5GIJJVZPCKLB3AOEI0PKT4C4DUTMCCKQ";
        vm.getInfo = function(day, location) {
        	console.log(day,location);
            var idFunction = function() {
                return $http.get("https://api.foursquare.com/v2/venues/search?ll=" + day + "%2C" +location + "&client_id=" + clientID + "&client_secret=" + clientSecret + "&v=20151222&query=" + vm.days[day - 1].locations[location - 1].alt)
                    .success(function(data) {
                        return data;
                    });

            }
            var venueFunction = function(id) {
                return $http.get("https://api.foursquare.com/v2/venues/" + id + "?client_id=" + clientID + "&client_secret=" + clientSecret + "&v=20151222")
                    .success(function(data) {
                        return data;
                    })
            }
            vm.data = idFunction().then(function(response) {

                var id = response.data.response.venues[0].id;

                return id;
            }).then(function(id) {
                venueFunction(id).success(function(response) {

                    vm.data = response.response.venue.shortUrl;



                });

            })

            
        }



    }



})()
