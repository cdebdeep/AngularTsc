var deb;
(function (deb) {
    var app;
    (function (app) {
        var testApp;
        (function (testApp) {
            var model;
            (function (model) {
                var Country = (function () {
                    function Country(name) {
                        this.name = name;
                        this.CountryName = name;
                    }
                    return Country;
                })();
                model.Country = Country;
            })(model = testApp.model || (testApp.model = {}));
        })(testApp = app.testApp || (app.testApp = {}));
    })(app = deb.app || (deb.app = {}));
})(deb || (deb = {}));
//# sourceMappingURL=Country.js.map