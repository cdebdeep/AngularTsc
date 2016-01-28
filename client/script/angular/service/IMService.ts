/**
 * Created by debdeep.chaudhuri on 1/28/2016.
 */
///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/app/app.ts" />
module deb.app.testApp.service {
    export interface IIMService{
    SendMesage();
    }
    export class  IMService implements IIMService{
        private myQ:ng.IQService;
        static $inject=['$q'];
        constructor($q:ng.IQService)
        {
            this.myQ=$q;
        };
        SendMesage() {

        }

    }
}

