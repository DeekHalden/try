!function(){"use strict";angular.module("test",["ui.router","GoogleMapsNative","ap.lateralSlideMenu"]).config(["$urlRouterProvider","$stateProvider",function(e,t){e.otherwise("/overview"),t.state("app",{url:"/overview",views:{header:{templateUrl:"views/partials/header.html",controller:"NavController as nav"},content:{templateUrl:"views/overview.html",controller:"OverviewController as overview"},footer:{templateUrl:"views/partials/footer.html"}}}).state("app.details",{url:"/details",views:{"content@":{templateUrl:"views/details.html",controller:"DetailsController as details"}}})}]).service("number",function(){return{isPositive:function(e){return String(e).indexOf("-")==-1}}})}()(function(){"use strict";function e(){var e=this;e.info=[{time:"10.00",name:"Trattoria del Ropeton",street:"Via Fontana del Ferro, 1, Verona, Italy",description:"Amazing owner who sings and serves the food himself! Expirience which you'll never forget and will include to the travel different mockups:)",photo:"https://media-cdn.tripadvisor.com/media/photo-s/0d/2d/b8/13/photo0jpg.jpg",bottomIcon:"fa fa-car",headerIcon:"http://icon-icons.com/icons2/390/PNG/512/knife-fork_39057.png"},{time:"11.00",name:"Trattoria del Ropeton",street:"Via Fontana del Ferro, 1, Verona, Italy",description:"Want some Lorem? Nah, Papier-mache claymore mine nano-physical computer human order-flow ",photo:"https://placekitten.com/1000",bottomIcon:"fa fa-bicycle",headerIcon:"http://www.freeiconspng.com/uploads/basket-cart-icon-27.png"},{time:"12.00",name:"Trattoria del Ropeton",street:"Via Fontana del Ferro, 1, Verona, Italy",description:"",photo:"https://media-cdn.tripadvisor.com/media/photo-s/0d/2d/b8/13/photo0jpg.jpg",bottomIcon:"",headerIcon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Y7KD2IY9shp6FcGJitw3l-NeSyLKa2jhP6Cas0QKq9PAlRzE"}]}angular.module("test").controller("DetailsController",e)})()(function(){"use strict";function e(e){var t=this;t.stateis=function(t){return e.is(t)}}angular.module("test").controller("NavController",e),e.$inject=["$state"]})()(function(){"use strict";angular.module("test").controller("HomeController",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]})})()(function(){"use strict";function e(e,t,o,i){function a(e,t){s.showId=0;var o=s.days[e-1].locations[t-1];return i.httpGetId(o).then(function(o){if(o.data.response.venues.length>0){var a=o.data.response.venues,r=a[0].id;return i.httpGetVenueById(r)}s.locationMessage="<p>No information found. </p>",s.showId=e+""+t}).then(function(o){var i=o.data.response.venue;i.tips.groups[0].items[0]?s.locationMessage="<h3>"+i.name+"</h3><p>"+i.tips.groups[0].items[0].text+'</p><p>Click<a href="'+i.shortUrl+'" target="_blank"> here </a>to learn more from Foursquare.</p>':s.locationMessage="<h3>"+i.name+'</h3><p>No Tips about this location.</p><p>Click<a href="'+i.shortUrl+'" target="_blank"> here </a>to learn more form Foursquare.</p>',s.showId=e+""+t})}function r(e){angular.forEach(e,function(e){return i.httpGetId(e).then(function(e){var t=e.data.response.venues[0].id;return i.httpGetVenueById(t)}).then(function(t){var o=t.data.response.venue,i=o.bestPhoto.prefix+"1000x1000"+o.bestPhoto.suffix;e.photo=i,e.description=o.name})})}function n(e){var t=s.days[e-1].locations;r(t),s.mapId=e}var s=this;s.showMap=n,s.showInfo=a,s.includeDesktopTemplate=!1,s.includeMobileTemplate=!1;var l=o.innerWidth;l<=991?s.includeMobileTemplate=!0:s.includeDesktopTemplate=!0,s.showId=0,s.mapId=0,s.expert={name:"Audrey Tautou",rating:3,overview:["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Crypto-towards grenade computer order-flow j-pop disposable receding cyber-gang boat urban 8-bit numinous franchise. Euro-pop sentient shoes gang-ware drugs cartel voodoo god urban. Vehicle nodality shrine systema geodesic refrigerator hacker pistol RAF warehouse skyscraper office j-pop into saturation point weathered nodal point.","Sprawl wonton soup rebar tanto BASE jump gang tower fetishism marketing geodesic human engine towards futurity numinous. Network table tiger-team garage neon soul-delay denim paranoid sentient Legba. Sub-orbital engine tattoo dome cardboard vinyl decay courier skyscraper tanto narrative otaku long-chain hydrocarbons gang apophenia claymore mine neural. Futurity monofilament tank-traps beef noodles stimulate tiger-team faded sunglasses drugs courier 8-bit apophenia 3D-printed."],badges:[{firstBadge:"Budget",secondBadge:"Luxury",value:80},{firstBadge:"Relaxed",secondBadge:"Active",value:60},{firstBadge:"Desolate",secondBadge:"Crowdy",value:50}]},s.days=[{day:1,locations:[{time:"10.00",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",photo:"http://placehold.it/1/F6F5E7",alt:"Welcome to Fabulous Las Vegas",index:1,coords:[36.0455,-115.1022]},{time:"15.00",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",photo:"http://placehold.it/1/F6F5E7",alt:"Ceasers palace",index:2,coords:[35.9739,-114.8958]},{time:"16.00",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",photo:"http://placehold.it/1/F6F5E7",alt:"3355 S Las Vegas Blvd",index:3,coords:[36.0711,-115.1008]}]},{day:2,locations:[{time:"10.00",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",photo:"http://placehold.it/1/F6F5E7",alt:"Kiev,Dynamo stadium",index:1,coords:[50.23,30.34]},{time:"15.00",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",photo:"http://placehold.it/1/F6F5E7",alt:"Dnipro, Arena",index:2,coords:[48.4647,35.0462]},{time:"16.00",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",photo:"http://placehold.it/1/F6F5E7",alt:"Аквапарк",index:3,coords:[46.7202,36.8231]}]},{day:3,locations:[{time:"10.00",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",photo:"http://placehold.it/1/F6F5E7",alt:"Stambul, Stadium",index:1,coords:[41.015137,28.97953]},{time:"15.00",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",photo:"http://placehold.it/1/F6F5E7",alt:"Sofia University",index:2,coords:[42.6965,23.326]},{time:"16.00",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",photo:"http://placehold.it/1/F6F5E7",alt:"Lviv, Just Lviv It",index:3,coords:[49.8397,24.0297]}]}],s.photos=[]}angular.module("test").controller("OverviewController",e),e.$inject=["$state","$http","$window","OverviewService"]})()(function(){"use strict";function e(){return{restrict:"EA",template:'<ul class="star-rating" ng-class="{readonly: readonly}">  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">    <i class="fa fa-star"></i>  </li></ul>',scope:{ratingValue:"=ngModel",max:"=?",onRatingSelect:"&?",readonly:"=?"},link:function(e,t,o){function i(){e.stars=[];for(var t=0;t<e.max;t++)e.stars.push({filled:t<e.ratingValue})}void 0==e.max&&(e.max=5),e.$watch("ratingValue",function(e,t){t&&i()})}}}angular.module("test").directive("starRating",e)})();