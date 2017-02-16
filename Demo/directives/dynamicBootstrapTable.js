app.directive("bootstrapTable", ['commonpage', '$timeout',
    function(commonpage, timeout) {
        return {
            restrict: "E",
            scope: {
                array: '=',
                removeObjs: '=',
                height: '=',
                pagesize: '=',
                loadType: '=',
                vid: '=',
                template: '='
            },
            templateUrl: "templates/dynamicBootstrapTable.html",
            link: function(scope, element, attrs) {
                var table = '';
                debugger;
                scope.ID = scope.vid;
                var testid = $('.Datatable').attr('id');
                var tableArray = scope.array;
                scope.Datatableshow = true;
                var datatbaleoptions = {
                    exportDataType: 'all',
                    maintainSelected: true,
                    smartDisplay: true,
                    trimOnSearch: true,
                    showFooter: false,
                    cache: false,
                    escape: true,
                    showRefresh: false,
                    showHeader: true,
                    showPaginationSwitch: true,
                    showToggle: true,
                    detailView: false,
                    onlyInfoPagination: false,
                    striped: false,
                    showColumns: true,
                    showExport: true,
                    search: true,
                    pagination: true,
                    rowStyle: rowStyle,
                    pageList: "[10,50,100]",
                    paginationFirstText: "First",
                    paginationPreText: "Previous",
                    paginationNextText: "Next",
                    paginationLastText: "Last",
                    detailFormatter: detailFormatter,
                    mobileResponsive: "true",
                    showLoading: true,
                    fixedColumns: true,
                    fixedNumber: 1,
                    showMultiSort: true,
                    pageSize: "10"
                };

                function rowStyle() {
                    return false;
                }

                function detailFormatter(index, row) {
                    var html = [];
                    $.each(row, function(key, value) {

                        html.push('<p><b>' + key + ':</b> ' + value + '</p>');
                    });
                    return html.join('');
                }

                function BootstrapTableLoad() {

                    datatbaleoptions.height = 650;
                    datatbaleoptions.pageSize = 10;
                    datatbaleoptions.columns = commonpage.setColumns(_.keys(tableArray[0]));
                    table.bootstrapTable(datatbaleoptions);

                    table.bootstrapTable('load', tableArray);
                    return false;
                }

                function BootstrapTableAppend() {
                    scope.Datatableshow = true;
                    tableID.bootstrapTable('prepend', tableArray);
                    return false;
                }
                // timeout(function() {
                debugger;
                table = $('.' + scope.ID);
                BootstrapTableLoad();
                // }, 1000);
            }
        };
    }
]);