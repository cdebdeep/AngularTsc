///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
var deb;
(function (deb) {
    var app;
    (function (app) {
        var testApp;
        (function (testApp) {
            var appconfig = (function () {
                function appconfig($routeProvider) {
                    this.$routeProvider = $routeProvider;
                    $routeProvider.when('home', {
                        controller: '',
                        templateUrl: ''
                    })
                        .when('home', {
                        controller: '',
                        templateUrl: ''
                    })
                        .otherwise({ redirectTo: '' });
                }
                ;
                appconfig.$inject = ['$routeProvider'];
                return appconfig;
            })();
            testApp.appconfig = appconfig;
        })(testApp = app.testApp || (app.testApp = {}));
    })(app = deb.app || (deb.app = {}));
})(deb || (deb = {}));
//# sourceMappingURL=appconfig.js.map