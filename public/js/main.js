var modulo = angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute']);
 
modulo.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html'
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/foto.html'
	});

	$routeProvider.otherwise({redirectTo: '/fotos'});

});