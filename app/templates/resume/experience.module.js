/**
 * Created by Kevin Bosman on 12/16/2016.
 */
(function () {
    angular.module('resume-module', [])
            .controller('ResumeController',
                    function ($scope, $http) {
                        ctrl = this;

                        ctrl.resumeJSON = {};

                        $http.get('app/data/resume.json')
                                .then(function (res) {
                                    ctrl.resumeJSON = res.data;
                                });

                        //basic
                        ctrl.getBasicInfo = function () {
                            return ctrl.resumeJSON["basic"];
                        };
                        
                        //education
                        ctrl.getEducation = function () {
                            return ctrl.resumeJSON["education"];
                        };
                        
                        //skills
                        ctrl.getSkills = function () {
                            return ctrl.resumeJSON["skills"];
                        };

                        //work
                        ctrl.getJobExperiences = function () {
                            return ctrl.resumeJSON["work"];
                        };
                    }
            )
            .component('jobExperienceList',
                    {
                        restrict: 'E'
                        , bindings: {
                            data: '<'
                        }
                        , templateUrl: 'app/templates/resume/fragments/job-experience-list.html'
                    })
            .component('jobExperience',
                    {
                        restrict: 'E'
                        , bindings: {
                            data: '<'
                        }
                        , templateUrl: 'app/templates/resume/fragments/job-experience.html'
                    });
})();