/**
 * Created by Kevin Bosman on 12/16/2016.
 */
(function () {
    angular.module('resume-module', [])
            .controller('ExperiencePanelController',
                    function ($scope, $http) {
                        $ctrl = this;
                        
                        $http.get('app/data/test.json')
                                .then(function (res) {
                                    $ctrl.data = res.data;
                                });
                    }
            )
            .component('experienceList',
                    {
                        restrict: 'E'
                        , bindings: {
                            data: '<'
                        }
                        , templateUrl: 'app/templates/resume/fragments/job-experience-list.html'
                    });
})();