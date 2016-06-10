
(function () {
    'use strict';
    var app = angular.module('moleculeDirective',
        [
            'ui.router',
            'ui.bootstrap'
        ]);

    app.config(['$stateProvider',
            '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider

                .state("moleculeDiagram", {
                  url: "/",
                  templateUrl: "app/molecules/moleculeDiagram.html",
                  controller: "MoleculeDiagramCtrl",
                  controllerAs: 'vm'
                })
            
                .state("reactions", {
                  url: "/reactions",
                  templateUrl: "app/molecules/reactions.html",
                  controller: "ReactionsCtrl",
                  controllerAs: 'vm'
                })




        }]
    );

}());
