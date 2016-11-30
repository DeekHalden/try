(function() {
    'use strict';

    angular.module('test')
        .service('OverviewService', OverviewFunction);

    OverviewFunction.$inject = ['$http'];

    function OverviewFunction($http) {
        var vm = this;


        var clientID = "BHTTXP2QZ1D3A1LDT1JJHOQH4Y3VGXP24SHMIPHOWTLO0DVA";
        var clientSecret = "GUQA4EATBIAT4GEP5GIJJVZPCKLB3AOEI0PKT4C4DUTMCCKQ";

        vm.httpGetVenueById = function(id) {
            return $http.get("https://api.foursquare.com/v2/venues/" + id + "?client_id=" + clientID + "&client_secret=" + clientSecret + "&v=20151222")
        }
        vm.httpGetId = function(loc) {
            
            return $http.get("https://api.foursquare.com/v2/venues/search?ll=" + loc.coords[0] + "%2C" + loc.coords[1] + "&client_id=" + clientID + "&client_secret=" + clientSecret + "&v=20151222&query=" + loc.alt + "")
        }

        

    }



})()
