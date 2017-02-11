app.directive("photoAlbum", ['$timeout', 'photoalubum', '$uibModal',
    function(timeout, photoalubum, uibModal) {
        var modalinstance;
        return {
            restrict: "E",
            templateUrl: "templates/dynamicPhotoPopup.html",
            link: function(scope, element, attrs) {
                debugger;
                scope.slides = [];
                modalinstance = uibModal.open({
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: "photopopup.html",
                    scope: scope,
                    backdrop: 'static'
                });
                photoalubum.getphotoslideimages(83872).then(function(response) {
                    scope.slides = [];
                    _.each(response.data, function(item) {
                        scope.slides.push(item);
                    });
                });
            }
        };
    }
]);