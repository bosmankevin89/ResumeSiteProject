/**
 * Created by Kevin Bosman on 12/16/2016.
 */
(function(){
    angular.module('experience-module',[])
        .controller('ExperienceController',
            function() {
                this.retrieveExperiences =  [
                        {
                            company: 'Company A'
                            , position: 'Job'
                        },
                        {
                            company: 'Company B'
                            , position: 'Job'
                        }
                    ];

            }
        )
        .controller('ExperiencePanelController',
            function() {
                this.tab = 1;

                this.selectTab = function(setTab){
                    this.tab = setTab;
                };

                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                }
            }
        )
        .directive('professionalExperienceList',
            function(){
                return {
                    restrict: 'E'
                    , templateUrl: 'app/templates/experience/fragments/professional/professional-experience-list-fragment.html'
                };
            }
        )
        .directive('jobExperienceBlock',
            function(){
                return {
                    restrict: 'E'
                    , templateUrl: 'app/templates/experience/fragments/job-fragment.html'
                };
            }
        );
})();