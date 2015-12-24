///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/model/Country.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/app/app.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/service/CountryService.ts" />

module deb.app.testApp.controller {
    export class CountryController {        
       private myCountryService : deb.app.testApp.service.ICoutryService;
       CountryCollection : deb.app.testApp.model.Country[];
       
       static $inject=['CountryService'];
       constructor(CountryService:service.ICoutryService){
           this.myCountryService=CountryService;           
       }
       
       Get(){
           this.myCountryService.Get().then((data)=>{
               this.CountryCollection=data;
           })
       }
    }
    
    var testApp = angular.module("testApp");
    testApp.controller('CountryController',controller.CountryController)

}


