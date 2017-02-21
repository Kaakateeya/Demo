app.directive("dummyDashboard", ['commonpage', '$timeout',
    function(commonpage, timeout) {
        return {
            restrict: "E",
            scope: {
                array: '=',
                removeobjs: '=',
                height: '=',
                pagesize: '=',
                loadtype: '='
            },
            templateUrl: "dashBoard/dashBoard1.html",
            link: function(scope, element, attrs) {

            }
        };
    }
]);