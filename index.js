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


    var states = [
        { name: 'testing', url: '/', templateUrl: 'dashBoard/dashBoard1.html' },
        { name: 'bootstrapslide', url: '/bootstrapslide', templateUrl: 'DemoPages/bootstrapSlideshow/index.html', controller: 'bootstrapSlideshowCtrl' },
        { name: 'bootstrapslidepopup', url: '/bootstrapslidepopup', templateUrl: 'DemoPages/bootstrapPopup/index.html', controller: 'bootstrapSlideshowCtrl' },

        { name: 'bootstrapTable', url: '/bootstrapTable', templateUrl: 'DemoPages/bootstrapTable/index.html', controller: 'bootstraptableCtrl' },
        { name: 'photosSlideshow', url: '/photosSlideshow', templateUrl: 'DemoPages/photosSlideshow/index.html' },
        { name: 'dashboard1', url: '/dashboard1', templateUrl: 'dashBoard/dashBoard1.html' },
        { name: 'dashboard2', url: '/dashboard2', templateUrl: 'dashBoard/dashBoard2.html' },
        { name: 'dashboard3', url: '/dashboard3', templateUrl: 'dashBoard/dashBoard3.html' },
        { name: 'dashboard4', url: '/dashboard4', templateUrl: 'dashBoard/dashBoard4.html' },
        { name: 'login', url: '/login', templateUrl: 'dashBoard/login.html' },
        { name: 'dashBoardNew', url: '/dashBoardNew', templateUrl: 'dashBoard/dashBoardNew.html', controller: 'newdashboard' }
    ];

    $urlRouterProvider.otherwise('/');

    _.each(states, function(item) {

        var innerView = {};
        if (item.name === "login" || item.name === "dashboard4") {
            innerView = {
                "content@": {
                    templateUrl: item.templateUrl,
                    controller: item.controller
                }
            };
        } else {
            innerView = {

                "topbar@": {
                    templateUrl: "templates/topheader.html"
                },
                "content@": {
                    templateUrl: item.templateUrl,
                    controller: item.controller
                },
                "bottompanel@": {
                    templateUrl: "templates/footer.html"
                }

            };
        }

        $stateProvider.state(item.name, {
            url: item.url,
            views: (innerView)

        });
        $locationProvider.html5Mode(true);
    });
}]);