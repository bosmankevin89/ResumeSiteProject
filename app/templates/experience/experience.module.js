/**
 * Created by Kevin Bosman on 12/16/2016.
 */
(function(){
    angular.module('experience-module',[])
        .controller('ExperiencePanelController',
            function($scope) {
                this.tab = 1;
                $scope.experiences =  [
                    {
                        company: 'Company A'
                        , position: 'Job'
                    },
                    {
                        company: 'Company B'
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
        .component('professionalExperienceList',
            {
                    restrict: 'E'
                    , bindings: {
                        data: '<'
                    }
                    , templateUrl: 'app/templates/experience/fragments/experience-list-fragment.html'

            });
})();