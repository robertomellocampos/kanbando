angular.module('myPeopleAppApp')
    .directive('ngMarkerTemplate', function() {
        
        return {
            restrict: 'E',
            scope: {
                rate: '@',
                max: '@',
                name: '@',
                job: '@'
            },
            template: '<div id="teste"><h5>{{vm.name}}</h5><h6>{{vm.job}}</h6>' +
                '<rating ng-model="vm.rate" max="vm.max"></rating></div>',
            link: function(scope, element, attrs) {


            },
            controller: function() {
               
                var vm = this;
                vm.rate = 4;
             
            },
            controllerAs: 'vm',
            bindToController: true
        }
    });
