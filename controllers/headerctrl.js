app.controller('headerctrl', ['$scope',
    function(scope) {


        scope.setContentHeight = function() {
            // reset height
            var $RIGHT_COL = $('.right_col'),
                $NAV_MENU = $('.nav_menu'),
                $LEFT_COL = $('.left_col'),
                $SIDEBAR_FOOTER = $('.sidebar-footer'),
                $FOOTER = $('footer');
            $BODY = $('body');
            $RIGHT_COL.css('min-height', $(window).height());

            var bodyHeight = $BODY.outerHeight(),
                footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
                leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
                contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

            // normalize content
            contentHeight -= $NAV_MENU.height() + footerHeight;

            $RIGHT_COL.css('min-height', contentHeight);

        };
        scope.menuclick = function() {
            debugger;
            var $BODY = $('body'),
                $SIDEBAR_MENU = $('#sidebar-menu');

            console.log('clicked - menu toggle');

            if ($BODY.hasClass('nav-sm')) {
                $SIDEBAR_MENU.find('li.active ul').hide();
                $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
            } else {
                $SIDEBAR_MENU.find('li.active-sm ul').show();
                $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
            }

            $BODY.toggleClass('nav-md nav-sm');

            scope.setContentHeight();
        };

    }
]);