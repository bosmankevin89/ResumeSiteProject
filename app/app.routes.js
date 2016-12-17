/**
 * Created by Kevin Bosman on 12/16/2016.
 */

angular.module('resume-app')
    .config(function($routeProvider){
        $routeProvider.when('/about', {
            templateUrl:'app/templates/about/index.html'
        })
        .when('/skills', {
            templateUrl:'app/templates/skills/index.html'
        })
        .when('/experience', {
            templateUrl:'app/templates/experience/index.html'
        })
        .when('/education', {
            templateUrl:'app/templates/education/index.html'
        })
        .when('/contact', {
            templateUrl:'app/templates/contact/index.html'
        })
        .otherwise({ redirectTo: '/about' });
    });