define(['services/routeResolver'],function () {
	var app = angular.module('appModule', ['ngRoute','ngResource','routeResolverServices']);

	console.info('app.js');
	console.info('USUARIO: '+ APP.DATA.CONFIG.USUARIO);
	console.info('URL: '+ APP.DATA.CONFIG.URL_TEMPLATE);

	app.config(['$routeProvider','routeResolverProvider',function ($routeProvider,routeResolverProvider) {
		var route = routeResolverProvider.route;
		$routeProvider.when('/tempinicio', route.resolve('tempinicio'));
	}]);

	// app.controller('tempideasController', ['$scope', function ($scope) {
	// 	var ng = $scope;
	// 	ng.saludo = 'Hola soy el IDEAS';
	// }]);

	// app.controller('tempinicioController', ['$scope', function ($scope) {
	// 	var ng = $scope;
	// 	ng.saludo = 'Hola soy el IINICIOS';
	// }]);

	app.controller('appController', ['$scope','$http','dataResource', function($scope,$http,dataResource) {
	    var ng = $scope;
	    ng.menuDemo = [
	    	{
	    		'id':1,
	    		'temp':'tempinicio',
	    		'desc':'Inicio'
	    	},
	    	{
	    		'id':2,
	    		'temp':'tempideas',
	    		'desc':'Ideas'
	    	},
	    	{
	    		'id':3,
	    		'temp':'tempretos',
	    		'desc':'Retos'
	    	},
	    	{
	    		'id':4,
	    		'temp':'tempproyectos',
	    		'desc':'Proyectos'
	    	},
	    	{
	    		'id':5,
	    		'temp':'tempcomunidad',
	    		'desc':'Comunidad'
	    	}
	    ];
	    

	    // $http.get("json/menu.json").success(function (data){
	    // 	ng.datos = data;
	    // });

	    // console.info(ng.datos);
	    // ng.dataResource = dataResource.get();
	}]);

	app.factory('dataResource', ['$resource',function ($resource) {
		// return $resource("json/menu.json",
  //       	{},
  //       	{ get: { method: "GET", isArray: true }
  //   	})
    }]);

	return app;
});