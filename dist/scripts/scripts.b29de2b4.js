"use strict";angular.module("angularApp",["ngAnimate","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","mailchimp"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).when("/fG7tNpKU",{templateUrl:"views/main.html"}).when("/privacy/",{templateUrl:"views/privacy.html"}).when("/design/theme/",{templateUrl:"views/design/theme.html"}).when("/design/moodboard",{templateUrl:"views/design/moodboard.html"}).when("/404/",{templateUrl:"views/404.html"}).otherwise({redirectTo:"404"})}]),angular.module("angularApp").controller("MainCtrl",["$scope","$location",function(a,b){var c=b.path();a.full="/fG7tNpKU"===c?!0:!1,a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);