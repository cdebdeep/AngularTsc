///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
var deb;
(function (deb) {
    var app;
    (function (app) {
        var testApp;
        (function (testApp) {
            var model;
            (function (model) {
                var testModel = (function () {
                    function testModel(testCaseName, testCaseId) {
                        this.testCaseName = testCaseName;
                        this.testCaseId = testCaseId;
                    }
                    return testModel;
                })();
                model.testModel = testModel;
            })(model = testApp.model || (testApp.model = {}));
        })(testApp = app.testApp || (app.testApp = {}));
    })(app = deb.app || (deb.app = {}));
})(deb || (deb = {}));
//# sourceMappingURL=testModel.js.map