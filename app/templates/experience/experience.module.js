/**
 * Created by Kevin Bosman on 12/16/2016.
 */
(function(){
    angular.module('experience-module',[])
        .controller('ExperiencePanelController',
            function($scope) {
                this.tab = 1;

                $scope.professional_experiences =  [
                    {
                        company: 'Company A'
                        , position: 'Job'
                    },
                    {
                        company: 'Company B'
                        , position: 'Job'
                    }
                ];

                $scope.non_development_experiences =  [
                    {
                        company: 'Company C'
                        , position: 'Job'
                    },
                    {
                        company: 'Company D'
                        , position: 'Job'
                    }
                ];

                this.selectTab = function(setTab){
                    this.tab = setTab;
                };

                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                }
            }
        )
        .component('experienceList',
            {
                    restrict: 'E'
                    , bindings: {
                        data: '<'
                    }
                    , templateUrl: 'app/templates/experience/fragments/experience-list-fragment.html'

            });
})();