app.controller('bootstrapSlideshowCtrl', ['$scope', 'SlideshowService',
    function(scope, SlideshowService) {
        scope.slideshowArray = [];
        pageload();

        SlideshowService.getslideshowProfiles().then(function(response) {
            console.log(response);

            scope.slideshowArray = JSON.parse(response.data[0]);

        });

        function pageload() {

            // scope.slideshowArray = [{
            //     Age: 29,
            //     AgeMax: null,
            //     Agemax: null,
            //     Agemin: null,
            //     ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img2_Images\011003298_FullPhoto.jpg",
            //     Caste: "Telugu-Kamma",
            //     CasteID: 402,
            //     Color: "Fair",
            //     Cust_ID: "100329",
            //     CustomerApplicationPhoto: null,
            //     CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
            //     DOB: "08-Jul-1987",
            //     EduGroupnamenew: "--",
            //     Education: null,
            //     EducationGroup: "BTech",
            //     Employeedin: null,
            //     FFNative: "--",
            //     FirstName: "ram kumar",
            //     Gender: "Male",
            //     GenderID: null,
            //     Gothram: "PAMIDIPALA",
            //     Height: "6'1 in - 185 cms",
            //     HeightInCentimeters: 26,
            //     Heightmax: null,
            //     Heightmin: null,
            //     HoroscopePath: "--",
            //     HoroscopeStatus: 0,
            //     Income: "100000",
            //     Intercaste: null,
            //     IsConfidential: false,
            //     JobLocation: "Bellary City ",
            //     KMPLID: "HD",
            //     LastName: "chaparala",
            //     MFNative: "--",
            //     MaritalStatusID: 44,
            //     MaxHeight: null,
            //     MinHeight: null,
            //     Name: null,
            //     NoOfBrothers: 1,
            //     NoOfSisters: 0,
            //     Ownerflag: false,
            //     Photo: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg",
            //     PhotoCount: 3,
            //     PhotoNames: "img1.jpg,img3.jpg,img2.jpg",
            //     PlaceOfBirth: "Bellary ",
            //     Profession: "Business",
            //     ProfileID: "011003298",
            //     ProfileStatusID: null,
            //     Property: "--",
            //     RegistrationDate: null,
            //     Star: "Anuradha",
            //     SubCaste: null,
            //     SuperConfidentila: 0,
            //     SurName: null,
            //     TOB: "10:30:00",
            //     TotalRows: 1,
            //     TotalRowsKeyword: null,
            //     Totalpages: null,

            //     companyname: null,
            //     countrylivingin: "India",
            //     currency: "Rs",
            //     educationspecialisation: null,
            //     email: "nanip620@gmail.com",
            //     fathercaste: "--",
            //     imageurl: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
            //     maritalstatus: "Divorce",
            //     mothercaste: "--",
            //     mothertongue: null,
            //     paid: 0,
            //     serviceDate: ""
            // }, {
            //     Age: 29,
            //     AgeMax: null,
            //     Agemax: null,
            //     Agemin: null,
            //     ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img2_Images\011003298_FullPhoto.jpg",
            //     Caste: "Telugu-Kamma",
            //     CasteID: 402,
            //     Color: "Fair",
            //     Cust_ID: "100329",
            //     CustomerApplicationPhoto: null,
            //     CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
            //     DOB: "08-Jul-1987",
            //     EduGroupnamenew: "--",
            //     Education: null,
            //     EducationGroup: "BTech",
            //     Employeedin: null,
            //     FFNative: "--",
            //     FirstName: "Praveen kumar",
            //     Gender: "Male",
            //     GenderID: null,
            //     Gothram: "PAMIDIPALA",
            //     Height: "6'1 in - 185 cms",
            //     HeightInCentimeters: 26,
            //     Heightmax: null,
            //     Heightmin: null,
            //     HoroscopePath: "--",
            //     HoroscopeStatus: 0,
            //     Income: "100000",
            //     Intercaste: null,
            //     IsConfidential: false,
            //     JobLocation: "Bellary City ",
            //     KMPLID: "HD",
            //     LastName: "chaparala",
            //     MFNative: "--",
            //     MaritalStatusID: 44,
            //     MaxHeight: null,
            //     MinHeight: null,
            //     Name: null,
            //     NoOfBrothers: 1,
            //     NoOfSisters: 0,
            //     Ownerflag: false,
            //     Photo: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg",
            //     PhotoCount: 3,
            //     PhotoNames: "img1.jpg,img3.jpg,img2.jpg",
            //     PlaceOfBirth: "Bellary ",
            //     Profession: "Business",
            //     ProfileID: "011003298",
            //     ProfileStatusID: null,
            //     Property: "--",
            //     RegistrationDate: null,
            //     Star: "Anuradha",
            //     SubCaste: null,
            //     SuperConfidentila: 0,
            //     SurName: null,
            //     TOB: "10:30:00",
            //     TotalRows: 1,
            //     TotalRowsKeyword: null,
            //     Totalpages: null,

            //     companyname: null,
            //     countrylivingin: "India",
            //     currency: "Rs",
            //     educationspecialisation: null,
            //     email: "nanip620@gmail.com",
            //     fathercaste: "--",
            //     imageurl: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
            //     maritalstatus: "Divorce",
            //     mothercaste: "--",
            //     mothertongue: null,
            //     paid: 0,
            //     serviceDate: ""
            // }, {
            //     Age: 29,
            //     AgeMax: null,
            //     Agemax: null,
            //     Agemin: null,
            //     ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img2_Images\011003298_FullPhoto.jpg",
            //     Caste: "Telugu-Kamma",
            //     CasteID: 402,
            //     Color: "Fair",
            //     Cust_ID: "100329",
            //     CustomerApplicationPhoto: null,
            //     CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
            //     DOB: "08-Jul-1987",
            //     EduGroupnamenew: "--",
            //     Education: null,
            //     EducationGroup: "BTech",
            //     Employeedin: null,
            //     FFNative: "--",
            //     FirstName: "Praveen kumar",
            //     Gender: "Male",
            //     GenderID: null,
            //     Gothram: "PAMIDIPALA",
            //     Height: "6'1 in - 185 cms",
            //     HeightInCentimeters: 26,
            //     Heightmax: null,
            //     Heightmin: null,
            //     HoroscopePath: "--",
            //     HoroscopeStatus: 0,
            //     Income: "100000",
            //     Intercaste: null,
            //     IsConfidential: false,
            //     JobLocation: "Bellary City ",
            //     KMPLID: "HD",
            //     LastName: "chaparala",
            //     MFNative: "--",
            //     MaritalStatusID: 44,
            //     MaxHeight: null,
            //     MinHeight: null,
            //     Name: null,
            //     NoOfBrothers: 1,
            //     NoOfSisters: 0,
            //     Ownerflag: false,
            //     Photo: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg",
            //     PhotoCount: 3,
            //     PhotoNames: "img1.jpg,img3.jpg,img2.jpg",
            //     PlaceOfBirth: "Bellary ",
            //     Profession: "Business",
            //     ProfileID: "011003298",
            //     ProfileStatusID: null,
            //     Property: "--",
            //     RegistrationDate: null,
            //     Star: "Anuradha",
            //     SubCaste: null,
            //     SuperConfidentila: 0,
            //     SurName: null,
            //     TOB: "10:30:00",
            //     TotalRows: 1,
            //     TotalRowsKeyword: null,
            //     Totalpages: null,

            //     companyname: null,
            //     countrylivingin: "India",
            //     currency: "Rs",
            //     educationspecialisation: null,
            //     email: "nanip620@gmail.com",
            //     fathercaste: "--",
            //     imageurl: null,
            //     maritalstatus: "Divorce",
            //     mothercaste: "--",
            //     mothertongue: null,
            //     paid: 0,
            //     serviceDate: ""
            // }, {
            //     Age: 29,
            //     AgeMax: null,
            //     Agemax: null,
            //     Agemin: null,
            //     ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img2_Images\011003298_FullPhoto.jpg",
            //     Caste: "Telugu-Kamma",
            //     CasteID: 402,
            //     Color: "Fair",
            //     Cust_ID: "100329",
            //     CustomerApplicationPhoto: null,
            //     CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
            //     DOB: "08-Jul-1987",
            //     EduGroupnamenew: "--",
            //     Education: null,
            //     EducationGroup: "BTech",
            //     Employeedin: null,
            //     FFNative: "--",
            //     FirstName: "Praveen kumar",
            //     Gender: "Male",
            //     GenderID: null,
            //     Gothram: "PAMIDIPALA",
            //     Height: "6'1 in - 185 cms",
            //     HeightInCentimeters: 26,
            //     Heightmax: null,
            //     Heightmin: null,
            //     HoroscopePath: "--",
            //     HoroscopeStatus: 0,
            //     Income: "100000",
            //     Intercaste: null,
            //     IsConfidential: false,
            //     JobLocation: "Bellary City ",
            //     KMPLID: "HD",
            //     LastName: "chaparala",
            //     MFNative: "--",
            //     MaritalStatusID: 44,
            //     MaxHeight: null,
            //     MinHeight: null,
            //     Name: null,
            //     NoOfBrothers: 1,
            //     NoOfSisters: 0,
            //     Ownerflag: false,
            //     Photo: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg",
            //     PhotoCount: 3,
            //     PhotoNames: "img1.jpg,img3.jpg,img2.jpg",
            //     PlaceOfBirth: "Bellary ",
            //     Profession: "Business",
            //     ProfileID: "011003298",
            //     ProfileStatusID: null,
            //     Property: "--",
            //     RegistrationDate: null,
            //     Star: "Anuradha",
            //     SubCaste: null,
            //     SuperConfidentila: 0,
            //     SurName: null,
            //     TOB: "10:30:00",
            //     TotalRows: 1,
            //     TotalRowsKeyword: null,
            //     Totalpages: null,

            //     companyname: null,
            //     countrylivingin: "India",
            //     currency: "Rs",
            //     educationspecialisation: null,
            //     email: "nanip620@gmail.com",
            //     fathercaste: "--",
            //     imageurl: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
            //     maritalstatus: "Divorce",
            //     mothercaste: "--",
            //     mothertongue: null,
            //     paid: 0,
            //     serviceDate: ""
            // }, {
            //     Age: 29,
            //     AgeMax: null,
            //     Agemax: null,
            //     Agemin: null,
            //     ApplicationPhotoPath: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img3_Images\011003298_FullPhoto.jpg,~\Images\ProfilePics\KMPL_100329_Images\img2_Images\011003298_FullPhoto.jpg",
            //     Caste: "Telugu-Kamma",
            //     CasteID: 402,
            //     Color: "Fair",
            //     Cust_ID: "100329",
            //     CustomerApplicationPhoto: null,
            //     CustomerFullPhoto: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_100329_Images/Img1_Images/011003298_FullPhoto.jpg",
            //     DOB: "08-Jul-1987",
            //     EduGroupnamenew: "--",
            //     Education: null,
            //     EducationGroup: "BTech",
            //     Employeedin: null,
            //     FFNative: "--",
            //     FirstName: "Praveen kumar",
            //     Gender: "Male",
            //     GenderID: null,
            //     Gothram: "PAMIDIPALA",
            //     Height: "6'1 in - 185 cms",
            //     HeightInCentimeters: 26,
            //     Heightmax: null,
            //     Heightmin: null,
            //     HoroscopePath: "--",
            //     HoroscopeStatus: 0,
            //     Income: "100000",
            //     Intercaste: null,
            //     IsConfidential: false,
            //     JobLocation: "Bellary City ",
            //     KMPLID: "HD",
            //     LastName: "chaparala",
            //     MFNative: "--",
            //     MaritalStatusID: 44,
            //     MaxHeight: null,
            //     MinHeight: null,
            //     Name: null,
            //     NoOfBrothers: 1,
            //     NoOfSisters: 0,
            //     Ownerflag: false,
            //     Photo: "~\Images\ProfilePics\KMPL_100329_Images\img1_Images\011003298_FullPhoto.jpg",
            //     PhotoCount: 3,
            //     PhotoNames: "img1.jpg,img3.jpg,img2.jpg",
            //     PlaceOfBirth: "Bellary ",
            //     Profession: "Business",
            //     ProfileID: "011003298",
            //     ProfileStatusID: null,
            //     Property: "--",
            //     RegistrationDate: null,
            //     Star: "Anuradha",
            //     SubCaste: null,
            //     SuperConfidentila: 0,
            //     SurName: null,
            //     TOB: "10:30:00",
            //     TotalRows: 1,
            //     TotalRowsKeyword: null,
            //     Totalpages: null,

            //     companyname: null,
            //     countrylivingin: "India",
            //     currency: "Rs",
            //     educationspecialisation: null,
            //     email: "nanip620@gmail.com",
            //     fathercaste: "--",
            //     imageurl: "http://d16o2fcjgzj2wp.cloudfront.net/Images/ProfilePics/KMPL_108801_Images/Img1_Images/111088014_FullPhoto.jpg",
            //     maritalstatus: "Divorce",
            //     mothercaste: "--",
            //     mothertongue: null,
            //     paid: 0,
            //     serviceDate: ""
            // }];


        }

    }
]);