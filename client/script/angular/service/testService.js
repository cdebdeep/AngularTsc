///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/model/testModel.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/app/app.ts" />
var deb;
(function (deb) {
    var app;
    (function (app) {
        var testApp;
        (function (testApp_1) {
            var service;
            (function (service) {
                var testModel = deb.app.testApp.model.testModel;
                /*export interface ItestService {
                    getAll(): ng.IPromise<deb.app.testApp.model.ItestModel[]>
                    get(nu): ng.IPromise<deb.app.testApp.model.ItestModel>
                }*/
                var testService = (function () {
                    //static $inject = ['$http', '$q']
                    function testService($http, $q) {
                        this.myHttp = $http;
                        this.myQ = $q;
                    }
                    testService.getService = function ($http, $q) {
                        return new testService($http, $q);
                    };
                    ///the $q approache -- returing the promise
                    testService.prototype.getAll = function () {
                        var def = this.myQ.defer();
                        var item1 = new testModel("Case101", 101);
                        var item2 = new testModel("Case102", 102);
                        var list = [item1, item2];
                        def.resolve(list);
                        /*this.myHttp.get('')
                            .then(function(result) {
                                def.resolve(result.data)
                            }, function(error) {
                                def.reject(error);
                            }
                            );*/
                        return def.promise;
                    };
                    testService.prototype.get = function (id) {
                        return this.myHttp.get('')
                            .then(function (response) {
                            return response.data;
                        }, function (response) {
                            return response;
                        });
                    };
                    return testService;
                })();
                service.testService = testService;
                var testApp = angular.module("testApp");
                testApp.factory('testService', deb.app.testApp.service.testService.getService);
            })(service = testApp_1.service || (testApp_1.service = {}));
        })(testApp = app.testApp || (app.testApp = {}));
    })(app = deb.app || (deb.app = {}));
})(deb || (deb = {}));
//# sourceMappingURL=testService.js.map