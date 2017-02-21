app.directive("leftDirective", ['$timeout',
    function(timeout) {
        return {
            restrict: "E",
            templateUrl: "templates/leftbar.html",
            scope: {
                array: '=',
                removeobjs: '=',
                height: '=',
                pagesize: '=',
                loadtype: '='
            },
            link: function(scope, element, attrs) {

            }
        };
    }
]);