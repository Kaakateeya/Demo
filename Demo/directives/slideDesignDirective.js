app.directive("slideshowDesign", ['$uibModal', 'commonpage',

    function(uibModal, commonpage) {
        var modalinstance;

        return {
            restrict: "E",
            scope: {
                slidearray: '=',
                slidetype: '=',
                showshortlist: '=',
                fromcustid: '=',
                fromprofileid: '=',
                totalrecord: '=',
                inputobj: '=',
                api: '=',
                empid: '=',
                backtosearch: '=',
                links: '=',
                resultarray: '=',
                dynamicheader: '=',
                template: '='
            },
            templateUrl: function(element, attrs, scope) {
                debugger;
                return attrs.slidetype === "'page'" ? 'templates/slideDesign.html' : '';
            },
            link: function(scope, element, attrs) {
                scope.displayArr = [];
                scope.ShowPause = true;
                scope.carousalID = 'myCarousel';
                scope.slidNum = 2;
                scope.displayArray = function(arr) {
                    var arraydata = [];
                    $.each(arr, function(index, item) {
                        var data = [];

                        data.push({
                            label: 'ProfileID',
                            value: '',
                            ProfileID: item.ProfileID,
                            KMPLID: item.KMPLID,
                            paid: item.paid,
                            IsConfidential: item.IsConfidential,
                            SuperConfidentila: item.SuperConfidentila,
                            HoroscopeStatus: item.HoroscopeStatus
                        });

                        data.push({ label: 'Name', value: item.LastName + ' ' + item.FirstName, style: item.NoOfBrothers == "0" && item.NoOfSisters == "0" ? "style= color:DarkViolet;" : "style= color:Black;" });
                        data.push({ label: 'DOB(age)', value: item.DOB + '(' + item.Age + ')' });
                        data.push({ label: 'Time of Birth', value: item.TOB });
                        data.push({ label: 'Place of Birth', value: item.PlaceOfBirth });
                        data.push({ label: 'Gothram', value: item.Gothram });
                        data.push({ label: 'Caste', value: item.Caste });
                        data.push({ label: 'Marital Status', value: item.maritalstatus || item.MaritalStatusID });
                        data.push({ label: 'Star', value: item.Star });
                        data.push({ label: 'Color', value: item.Color });
                        data.push({ label: 'Height', value: item.Height });
                        data.push({ label: 'Qualification', value: item.EducationGroup + "," + item.EduGroupnamenew });
                        data.push({ label: 'Profession', value: item.Profession });
                        data.push({ label: 'Job Location', value: item.JobLocation });
                        data.push({ label: 'Income(P.M)', value: item.Income });
                        data.push({ label: 'Father Native', value: item.FFNative });
                        data.push({ label: 'Mother Native', value: item.MFNative });
                        data.push({ label: 'Property(Lakhs)', value: item.Property });
                        data.push({ label: 'backendFields', Custid: item.Cust_ID, ProfileID: item.ProfileID, PhotoCount: item.PhotoCount, Age: item.Age, HeightInCentimeters: item.HeightInCentimeters, MaritalStatusID: item.MaritalStatusID, CasteID: item.CasteID, serviceDate: item.serviceDate, CustPhoto: item.imageurl, totalrecords: item.TotalRowsKeyword });
                        if (item.serviceDate != "--" && item.serviceDate != "" && item.serviceDate != null)
                            data.push({ label: 'ServiceDate', value: item.serviceDate, style: 'style= color:red;' });
                        if (item.Intercaste == "True")
                            data.push({ label: 'Intercaste', value: (item.fathercaste + "/" + item.mothercaste) });
                        if (item.ProfileGrade != 0)
                            data.push({ label: 'ProfileGrade', value: item.ProfileGrade == "1" ? "A-(This ProfileId Contacts not Visible On Web)" : (item.ProfileGrade == "2" ? "B" : (item.ProfileGrade == "3" ? "C-(This ProfileId Contacts Visible On Web)" : "--(This ProfileId Contacts not Visible On Web)")) });

                        arraydata.push({ itmArr: data, custPhoto: item.imageurl });
                    });
                    return arraydata;
                };
                scope.pageload = function() {
                    scope.displayArr = scope.displayArray(scope.slidearray);
                    console.log(scope.displayArr);
                    commonpage.checkitem(scope.carousalID);
                };
                scope.pageload();
                if (scope.slidetype === 'popup') {
                    commonpage.showPopup('templates/dynamicSlideshow.html', scope, 'lg');
                }

                $('#myCarousel').bind('slide.bs.carousel', function() {
                    var currentIndex = $('#myCarousel').find('div.active').index() + 1;
                    scope.slidNum = currentIndex;

                });

                scope.pauseResume = function(type) {
                    if (type === 'play') {
                        scope.ShowPause = false;
                    } else {
                        scope.ShowPause = true;
                    }
                    commonpage.pausePalyslide(type, scope.carousalID);
                };

            }
        };
    }
]);