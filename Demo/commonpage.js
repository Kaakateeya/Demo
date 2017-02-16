app.factory('commonpage', ['$uibModal', 'photoalubum', function(uibModal, photoalubum) {
    var modalinstance;
    var obj = {};
    obj.gotoSlide = function(e) {
        var lastslide = parseInt($("#lnkLastSlide").text());
        if (parseInt($(e).val()) <= lastslide) {
            $('#myCarousel').carousel(parseInt($(e).val()) - 1);
            $(e).val('');
            return false;
        } else {
            alert('you can go till ' + lastslide + ' slide only');
        }
    };
    return {
        showPopup: function(url, scope, size) {
            modalpopupopen = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: url,
                scope: scope,
                size: size,
                backdrop: 'static',
                keyboard: false
            });
        },
        closepopup: function() {
            modalpopupopen.close();
        },
        pausePalyslide: function(type, id) {
            if (type === 'play') {
                $('#' + id).carousel({
                    interval: 2000,
                    pause: "false"
                });
            } else {
                $('#' + id).carousel('pause');
            }

        },
        checkitem: function(id) {
            var $this;
            $this = $("#" + id);

            if ($("#" + id + " .carousel-inner .item:first").hasClass("active")) {
                $("#" + id).find('.left').hide();
                $("#" + id).find('.right').show();
            } else if ($("#" + id + " .carousel-inner .item:last").hasClass("active")) {
                $("#" + id).find('.left').show();
                $("#" + id).find('.right').hide();
            } else {
                $("#" + id).find('.left').show();
                $("#" + id).find('.right').show();
            }
        },
        ArrowMoveSlide: function() {
            $(document).bind('keyup', function(e) {

                var totalItems = $('#myCarousel').find('.item').length;
                var currentIndex = $('#myCarousel').find('div.active').index() + 1;
                if (e.which == 39) {
                    if (totalItems != currentIndex)
                        $('#myCarousel').carousel('next');
                } else if (e.which == 37) {
                    if (currentIndex != 1)
                        $('#myCarousel').carousel('prev');
                }

            });
        },

        moveonenter: function() {
            $(function() {
                var wage = document.getElementById("txtGotoVal");
                wage.addEventListener("keydown", function(e) {
                    if (e.keyCode === 13) {
                        obj.gotoSlide(wage);
                        $('#myCarousel').carousel(parseInt($(wage).val()) - 1);
                        $('#myCarousel').carousel('pause');
                        $('#playButton').show();
                        $('#pauseButton').hide();
                        return false;
                    }

                });
            });
        },
        ShowPhotoPopup: function(custid, scope) {
            photoalubum.getphotoslideimages(custid).then(function(response) {
                scope.slides = [];
                _.each(response.data, function(item) {
                    scope.slides.push(item);
                });
            });
            modalpopupopen = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'templates/dynamicPhotoPopup.html',
                scope: scope,
                backdrop: 'static',
                keyboard: false
            });
        }

    };
}]);