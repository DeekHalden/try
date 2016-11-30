/**
 * test Module
 *
 * Description
 */
(function() {
        'use strict';
        angular.module('test', ['ui.router', 'GoogleMapsNative', 'ap.lateralSlideMenu', ])
            .config(function($urlRouterProvider, $stateProvider) {

                $urlRouterProvider.otherwise('/overview');


                $stateProvider
                    .state('app', {
                        url: '/overview',
                        views: {
                            'header': {
                                templateUrl: 'views/partials/header.html',
                                controller: 'NavController as nav'
                            },
                            'content': {
                                templateUrl: 'views/overview.html',
                                controller: 'OverviewController as overview'
                                
                            },
                            'footer': {
                                templateUrl: 'views/partials/footer.html',
                                
                            }
                        }

                    })
                    
                    .state('app.details', {
                        url: '/details',
                        views: {
                            'content@': {
                                templateUrl: 'views/details.html',
                                controller: 'DetailsController as details'
                            }
                        }

                    })
            }).service('number', function() {
                return {
                    isPositive: function(operationPrice) {
                        return String(operationPrice).indexOf("-") == -1;
                    }
                };
            });
    }


)()
