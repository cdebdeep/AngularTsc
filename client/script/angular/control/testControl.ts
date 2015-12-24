/**
 * Created by debdeep.chaudhuri on 12/10/2015.
 */
///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/model/testModel.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/app/app.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/service/testService.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/scope/ItestScope.ts" />


module deb.app.testApp.controller {
    //import ItestService = deb.app.testApp.service.ItestService;
    import testService = deb.app.testApp.service.testService;
    import ItestScope = deb.app.testApp.scope.ItestScope;
    export  interface  ItestController{
        //get1(): void
        getAll(): void
        get(id:number): void
    }

   export class testController{
           myService : testService;
           myScope : ItestScope;
        static $inject = ['testService', '$scope']
        constructor(testService:deb.app.testApp.service.testService,$scope:ItestScope){
            this.myService=testService;
            this.myScope = $scope;

            /*self.myScope.getAll=function (){
                self.myService.getAll().then((data)=>{
                    self.myScope.myItems=data;
                })
            }*/
        };


        getAll(){
            console.log('cassss')
            this.myService.getAll().then((data)=>{
                this.myScope.myItems=data;
            })
        }

         get(id:number):void {
            this.myService.get(id).then((data)=>{
                this.myScope.myItem=data;
            })
        }

    }





    var testApp = angular.module("testApp");
    //testController.$inject['testService','testScope'];

    testApp.controller('testController',deb.app.testApp.controller.testController);

}