app.directive("topheaderDirective", ['$timeout',
    function(timeout) {
        return {
            restrict: "E",
            scope: {
                array: '=',
                removeobjs: '=',
                height: '=',
                pagesize: '=',
                loadtype: '='
            },
            templateUrl: "templates/leftbar.html",
            link: function(scope, element, attrs) {

            }
        };
    }
]);