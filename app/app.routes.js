/**
 * Created by Kevin Bosman on 12/16/2016.
 */

angular.module('website-app')
    .config(function($routeProvider){
        $routeProvider.when('/resume', {
            templateUrl:'app/templates/resume/index.html'
        })
        .otherwise({ redirectTo: '/resume' });
    });