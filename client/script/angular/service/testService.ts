///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/model/testModel.ts" />
///<reference path="../../../../../AngularTsc/client/script/angular/app/app.ts" />


module deb.app.testApp.service {
	import ItestModel = deb.app.testApp.model.ItestModel;
	import testModel = deb.app.testApp.model.testModel;
	/*export interface ItestService {
		getAll(): ng.IPromise<deb.app.testApp.model.ItestModel[]>
		get(nu): ng.IPromise<deb.app.testApp.model.ItestModel>
	}*/



	export class testService {
        private myHttp: ng.IHttpService
        private myQ:ng.IQService
		public static getService($http: ng.IHttpService, $q: ng.IQService):deb.app.testApp.service.testService {
			return new testService($http,$q);
		}

		//static $inject = ['$http', '$q']
		constructor($http: ng.IHttpService, $q: ng.IQService)
        {
            this.myHttp=$http;
            this.myQ=$q;
        }
		
		///the $q approache -- returing the promise
		public getAll(): ng.IPromise<any> {
			var def = this.myQ.defer();
			var item1	= new  testModel("Case101",101);
            var item2	= new  testModel("Case102",102);

			var list :ItestModel[]=[item1,item2]

			def.resolve(list)
			/*this.myHttp.get('')
				.then(function(result) {
					def.resolve(result.data)
				}, function(error) {
					def.reject(error);
				}
				);*/
			return def.promise;
		}

		public get(id:number): ng.IPromise<deb.app.testApp.model.ItestModel> {
			return this.myHttp.get('')
				.then(
				(response) => {
					return response.data;
				},
				(response) => {
					return response
				})
		}

	}

	var testApp = angular.module("testApp");
    testApp.factory('testService',deb.app.testApp.service.testService.getService)
}