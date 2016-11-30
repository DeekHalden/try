/**
 * test Module
 *
 * Description
 */
(function() {
        'use strict';
        angular.module('test', ['ui.router', 'GoogleMapsNative', 'ap.lateralSlideMenu', ])
            .config(function($urlRouterProvider, $stateProvider) {

                $urlRouterProvider.otherwise('/');


                $stateProvider
                    .state('app', {
                        url: '/',
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
                    .state('app.overview', {
                        url: 'overview',
                        views: {
                            'content@': {
                                templateUrl: 'views/overview.html',
                                controller: 'OverviewController as overview'
                            }
                        }

                    })
                    .state('app.overview.details', {
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
