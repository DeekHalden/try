/**
 * test Module
 *
 * Description
 */
(function() {
        'use strict';
        angular.module('test', ['ui.router','ngMap'])
            .config(function($urlRouterProvider, $stateProvider) {
            	
                $urlRouterProvider.otherwise('/');


                $stateProvider
                    .state('app', {
                        url: '/',
                        views: {
                            'header': {
                                templateUrl: 'views/partials/header.html',
                                controller: 'HeaderController'
                            },
                            'content': {
                                templateUrl: 'views/partials/home.html',
                                controller: 'HomeController as home'
                            },
                            'footer': {
                                templateUrl: 'views/partials/footer.html'
                            }
                        }

                    })
                    .state ('app.overview',{
                    	url:'overview',
                    	views: {
                    		'content@': {
                    			templateUrl: 'views/overview.html',
                    			controller: 'OverviewController as overview'
                    		}
                    	}

                    })
                    .state ('app.overview.details',{
                    	url:'/details',
                    	views: {
                    		'content@': {
                    			templateUrl: 'views/details.html',
                    			controller: 'DetailsController as details'
                    		}
                    	}

                    })
            })
    }


)()