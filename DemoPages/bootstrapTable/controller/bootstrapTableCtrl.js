app.controller('bootstraptableCtrl', ['$scope',
    function(scope) {
        scope.tableArray = [];
        scope.StableArray = [];
        scope.ltableArray = [];
        scope.type = [];
        // function pageload() {
        // SlideshowService.getslideshowProfiles().then(function(response) {

        //     scope.slideshowArray = JSON.parse(response.data[0]);
        //     console.log(scope.slideshowArray);

        // });


        scope.tableArray = [{
                Age: 20,
                AgeMax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair",
                Cust_ID: "100329",
                CustomerApplicationPhoto: null,
                CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
                DOB: "08-Jul-1987",
                EduGroupnamenew: "--",
                Education: null,
                EducationGroup: "BTech",

            },
            {
                Age: 21,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair",
                Cust_ID: "100329",
                CustomerApplicationPhoto: null,
                CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
                DOB: "08-Jul-1987",
                EduGroupnamenew: "--",
                Education: null,
                EducationGroup: "BTech",

            },
            {
                Age: 23,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair",
                Cust_ID: "100329",
                CustomerApplicationPhoto: null,
                CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
                DOB: "08-Jul-1987",
                EduGroupnamenew: "--",
                Education: null,
                EducationGroup: "BTech",

            },
        ];

        scope.StableArray = [{
                Age: 30,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img2_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair",
                Cust_ID: "100329",
                CustomerApplicationPhoto: null,
                CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
                DOB: "08-Jul-1987",
                EduGroupnamenew: "--",
                Education: null,
                EducationGroup: "BTech",

            },
            {
                Age: 31,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair",
                Cust_ID: "100329",
                CustomerApplicationPhoto: null,
                CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
                DOB: "08-Jul-1987",
                EduGroupnamenew: "--",
                Education: null,
                EducationGroup: "BTech",

            },
            {
                Age: 32,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair",
                Cust_ID: "100329",
                CustomerApplicationPhoto: null,
                CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
                DOB: "08-Jul-1987",
                EduGroupnamenew: "--",
                Education: null,
                EducationGroup: "BTech",

            },
        ];

        scope.ltableArray = [{
                Age: 40,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair"
            },
            {
                Age: 41,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair"
            },
            {
                Age: 42,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair"
            },
            {
                Age: 43,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair"
            },
            {
                Age: 44,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair"
            },
            {
                Age: 45,
                AgeMax: null,
                Agemax: null,
                Agemin: null,
                ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg",
                Caste: "Telugu-Kamma",
                CasteID: 402,
                Color: "Fair"
            },
        ];
        scope.$on('loadmore', function(event) {
            scope.$broadcast('tableAppend', scope.StableArray);
            return false;
        });

    }
]);