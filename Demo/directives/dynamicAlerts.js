app.factory('alert', ['$uibModal', '$timeout', function(uibModal, timeout) {
    var modalinstance;
    return {

        dynamicpopup: function(url, scope, uibModal, size) {
            debugger;
            modalinstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: url,
                scope: scope,
                size: size || 'lg',
                backdrop: 'static'
                    //keyboard: false
            });
        },
        dynamicpopupclose: function() {
            alert(modalinstance);
            debugger;
            modalinstance.close("close");
        }


    };
}]);