/**
 * Created by debdeep.chaudhuri on 1/28/2016.
 */
///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/app/app.ts" />
var deb;
(function (deb) {
    var app;
    (function (app) {
        var testApp;
        (function (testApp) {
            var service;
            (function (service) {
                var IMService = (function () {
                    function IMService($q) {
                        this.myQ = $q;
                    }
                    ;
                    IMService.prototype.SendMesage = function () {
                    };
                    IMService.$inject = ['$q'];
                    return IMService;
                })();
                service.IMService = IMService;
            })(service = testApp.service || (testApp.service = {}));
        })(testApp = app.testApp || (app.testApp = {}));
    })(app = deb.app || (deb.app = {}));
})(deb || (deb = {}));
//# sourceMappingURL=IMService.js.map