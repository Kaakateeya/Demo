/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */


var app = angular.module('Kaakateeya', ['ngSanitize', 'ui.bootstrap', 'ui.router']);
app.apiroot = 'http://183.82.0.58:8025/Api/';
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {


    var states = [{ name: 'testing', url: '/', templateUrl: 'index.html' },
        { name: 'bootstrapslide', url: '/bootstrapslide', templateUrl: 'Demo/bootstrapSlideshow/index.html', controller: 'bootstrapSlideshowCtrl' },
        { name: 'bootstrapTable', url: '/bootstrapTable', templateUrl: 'Demo/bootstrapTable/index.html', controller: 'bootstraptableCtrl' },
        { name: 'photosSlideshow', url: '/photosSlideshow', templateUrl: 'Demo/photosSlideshow/index.html' }
    ];

    $urlRouterProvider.otherwise('/');

    _.each(states, function(item) {

        var innerView = {};

        innerView = {

            "content@": {
                templateUrl: item.templateUrl,
                controller: item.controller
            }

        };

        $stateProvider.state(item.name, {
            url: item.url,
            views: (innerView)

        });
        $locationProvider.html5Mode(true);
    });
}]);