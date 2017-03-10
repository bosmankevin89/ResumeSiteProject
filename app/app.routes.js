/**
 * Created by Kevin Bosman on 12/16/2016.
 */

angular.module('resume-app')
    .config(function($routeProvider){
        $routeProvider.when('/about', {
            templateUrl:'app/templates/about/index.html'
        })
        .when('/resume', {
            templateUrl:'app/templates/resume/index.html'
        })
        .otherwise({ redirectTo: '/about' });
    });