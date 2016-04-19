/**
 * 
 */
var app = angular.module('pruebaApp',['ngAnimate',
                            		'ngAria',
                            		'ngResource',
                            		'ngSanitize',
                            		'ngMaterial']);
app.controller('mainCtrl',function($scope){
	$scope.main = '';
});