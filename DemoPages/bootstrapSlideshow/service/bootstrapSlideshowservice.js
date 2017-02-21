app.factory('SlideshowService', ['$http', function(http) {
    return {
        getslideshowProfiles: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getCustShortlistProfile', { params: { CustID: "91022,91035" } });
        }
    };
}]);