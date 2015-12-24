///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/model/Country.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/app/app.ts" />
var deb;
(function (deb) {
    var app;
    (function (app) {
        var testApp;
        (function (testApp_1) {
            var service;
            (function (service) {
                var CountryService = (function () {
                    function CountryService($http, $q) {
                        this.myHttp = $http;
                        this.myQ = $q;
                    }
                    CountryService.prototype.Get = function () {
                        var def = this.myQ.defer();
                        var Country1 = new deb.app.testApp.model.Country('INDIA');
                        var Country2 = new deb.app.testApp.model.Country('USA');
                        var CountryCollection = [Country1, Country2];
                        def.resolve(CountryCollection);
                        return def.promise;
                        var x = 102;
                    };
                    CountryService.GetCountryService = function ($http, $q) {
                        return new CountryService($http, $q);
                    };
                    CountryService.$inject = ['$http', '$q'];
                    return CountryService;
                })();
                service.CountryService = CountryService;
                var testApp = angular.module("testApp");
                testApp.factory('CountryService', service.CountryService.GetCountryService);
            })(service = testApp_1.service || (testApp_1.service = {}));
        })(testApp = app.testApp || (app.testApp = {}));
    })(app = deb.app || (deb.app = {}));
})(deb || (deb = {}));
//# sourceMappingURL=CountryService.js.map