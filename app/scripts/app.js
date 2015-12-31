'use strict';

/**
 * @ngdoc overview
 * @name callcenterApp
 * @description
 * # callcenterApp
 *
 * Main module of the application.
 */
var myapp = angular
  .module('callcenterApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMessages'
  ]);


function watchLanguageChange($scope,propertiesfactory){
  $scope.$watch(function () { return propertiesfactory.getProperties("no"); },
    function (value) {
      $scope.properties = value;
      console.log("$scope.properties in login con inside:"+$scope.properties);
    }
  );
}


  myapp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
