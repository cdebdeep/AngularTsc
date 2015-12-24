///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/model/Country.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/app/app.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/service/CountryService.ts" />
var deb;
(function (deb) {
    var app;
    (function (app) {
        var testApp;
        (function (testApp_1) {
            var controller;
            (function (controller) {
                var CountryController = (function () {
                    function CountryController(CountryService) {
                        this.myCountryService = CountryService;
                    }
                    CountryController.prototype.Get = function () {
                        var _this = this;
                        this.myCountryService.Get().then(function (data) {
                            _this.CountryCollection = data;
                        });
                    };
                    CountryController.$inject = ['CountryService'];
                    return CountryController;
                })();
                controller.CountryController = CountryController;
                var testApp = angular.module("testApp");
                testApp.controller('CountryController', controller.CountryController);
            })(controller = testApp_1.controller || (testApp_1.controller = {}));
        })(testApp = app.testApp || (app.testApp = {}));
    })(app = deb.app || (deb.app = {}));
})(deb || (deb = {}));
//# sourceMappingURL=CountryController.js.map