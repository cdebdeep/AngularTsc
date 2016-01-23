///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/model/Country.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/app/app.ts" />

module deb.app.testApp.service {
    ///import ICountry = deb.app.testApp.model.ICountry;
    //import Country = deb.app.testApp.model.Country;
    export interface ICoutryService{
        Get() :ng.IPromise<model.ICountry[]>
    }
    
    export class CountryService implements ICoutryService{        
        private myQ:ng.IQService;
        private myHttp:ng.IHttpService;
        
        static $inject=['$http','$q'];
        
        constructor($http: ng.IHttpService, $q: ng.IQService)
        {
            this.myHttp=$http;
            this.myQ=$q;
        }        
        
        public Get():ng.IPromise<model.ICountry[]>{
            var def = this.myQ.defer();

            var Country1 = new deb.app.testApp.model.Country('INDIA');
            var Country2 = new deb.app.testApp.model.Country('USA');
                       
            var CountryCollection : deb.app.testApp.model.ICountry[]=[Country1,Country2];
            def.resolve(CountryCollection);            
            return def.promise;
            var x=102;
        }
        
        public static GetCountryService($http: ng.IHttpService, $q: ng.IQService):ICoutryService{
            return new CountryService($http,$q);
        }
    }
    
     var testApp = angular.module("testApp");
     testApp.factory('CountryService',service.CountryService.GetCountryService)
    
}