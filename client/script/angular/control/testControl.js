/**
 * Created by debdeep.chaudhuri on 12/10/2015.
 */
///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/model/testModel.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/app/app.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/service/testService.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/scope/ItestScope.ts" />
var deb;
(function (deb) {
    var app;
    (function (app) {
        var testApp;
        (function (testApp_1) {
            var controller;
            (function (controller) {
                var testController = (function () {
                    function testController(testService, $scope) {
                        this.myService = testService;
                        this.myScope = $scope;
                        /*self.myScope.getAll=function (){
                            self.myService.getAll().then((data)=>{
                                self.myScope.myItems=data;
                            })
                        }*/
                    }
                    ;
                    testController.prototype.getAll = function () {
                        var _this = this;
                        console.log('cassss');
                        this.myService.getAll().then(function (data) {
                            _this.myScope.myItems = data;
                        });
                    };
                    testController.prototype.get = function (id) {
                        var _this = this;
                        this.myService.get(id).then(function (data) {
                            _this.myScope.myItem = data;
                        });
                    };
                    testController.$inject = ['testService', '$scope'];
                    return testController;
                })();
                controller.testController = testController;
                var testApp = angular.module("testApp");
                //testController.$inject['testService','testScope'];
                testApp.controller('testController', deb.app.testApp.controller.testController);
            })(controller = testApp_1.controller || (testApp_1.controller = {}));
        })(testApp = app.testApp || (app.testApp = {}));
    })(app = deb.app || (deb.app = {}));
})(deb || (deb = {}));
//# sourceMappingURL=testControl.js.map