/**
 * Created by debdeep.chaudhuri on 12/15/2015.
 */
///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/model/testModel.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/service/testService.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/control/testControl.ts" />

module deb.app.testApp.scope  {
    import testController = deb.app.testApp.controller.testController;
    export interface ItestScope extends ng.IScope{
        myItems:deb.app.testApp.model.ItestModel[]
        myItem:deb.app.testApp.model.ItestModel
        Ctrl: testController;
         getAll():void;
    }
}