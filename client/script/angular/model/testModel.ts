///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
module deb.app.testApp.model {
	export interface ItestModel {
		testCaseName: string;
		testCaseId: number;
	}

	export class testModel implements ItestModel {
			constructor(public testCaseName:string,public testCaseId:number){}
	}
}

