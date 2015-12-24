///<reference path="../../../../../AngularTsc/typings/angularjs/angular.d.ts" />
///<reference path="../../../../../AngularTsc/typings/angularjs/angular-route.d.ts" />
module deb.app.testApp{
	export  class appconfig{
		static $inject =['$routeProvider']
		constructor(private $routeProvider:ng.route.IRouteProvider){
			$routeProvider.when('home',{
				controller:'',
				templateUrl:''				
			})
			.when('home',{
				controller:'',
				templateUrl:''				
			})
			.otherwise({redirectTo:''})
		};			
	}	
}