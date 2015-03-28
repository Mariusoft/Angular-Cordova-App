'use strict';

/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular
    .module('core')
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            
/**
 * @ngdoc event
 * @name core.config.route
 * @eventOf core.config
 * @description
 *
 * Define routes and the associated paths
 *
 * - When the state is `'todo'`, route to todo
 *
*/
$stateProvider
    .state('todo', {
        url: '/todo',
        templateUrl: 'modules/core/views/todo.html',
        controller: 'TodoController'
    }).
state('accounts', {
        url: '/accounts',
        templateUrl: 'modules/core/views/accounts.html',
        controller: 'AccountsController'
    }).
state('about', {
        url: '/about',
        templateUrl: 'modules/core/views/about.html',
        controller: 'AboutController'
    }).
state('home', {
                    url: '/',
                    templateUrl: 'modules/core/views/home.html',
                    controller: 'HomeController'
                
                });
        }
    ]);
