'use strict';
var ApplicationConfiguration = (function() {
    var applicationModuleName = 'angularjsapp';
    var applicationModuleVendorDependencies = ['ngResource', 'ngCookies', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'ui.utils', 'ui.sortable', 'LocalStorageModule'];
    var registerModule = function(moduleName) {
        angular
            .module(moduleName, []);
        angular
            .module(applicationModuleName)
            .requires
            .push(moduleName);
    };
	
	

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();

'use strict';

angular
    .module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular
    .module(ApplicationConfiguration.applicationModuleName)
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);
angular
    .element(document)
    .ready(function() {
        if (window.location.hash === '#_=_') {
            window.location.hash = '#!';
        }
        angular
            .bootstrap(document,
                [ApplicationConfiguration.applicationModuleName]);
    });
	
angular
 	.config(['localStorageServiceProvider', function(localStorageServiceProvider){
   		localStorageServiceProvider.setPrefix('ls');
  	}]);
'use strict';

ApplicationConfiguration.registerModule('core');

'use strict';

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

'use strict';

angular
    .module('core')
    .controller('AboutController', [
        '$scope',
        function($scope) {


        }
]);

'use strict';

angular
    .module('core')
    .controller('AccountsController', [
        '$scope',
        function($scope) {


        }
]);

'use strict';

angular
    .module('core')
    .controller('HomeController', ['$scope',
        function($scope) {

        }
    ]);

'use strict';

angular
    .module('core')
    .controller('SearchCtrlController', [
        '$scope',
        function($scope) {


        }
]);

'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.TodoController
 * @description TodoController
 * @requires ng.$scope
*/

  
angular
    .module('core')
    .controller('TodoController', [
        '$scope',
		'localStorageService',
        function($scope, localStorageService) {
		  var todosInStore = localStorageService.get('todos');
		  
			$scope.todos = todosInStore || [];
			
			$scope.$watch('todos',function(){
				localStorageService.set('todos', $scope.todos);
			}, true);
			
			$scope.addTodo = function(){
				$scope.todos.push($scope.todo);
				$scope.todo = '';	
				
			};
			
			$scope.removeTodo = function(index){
				$scope.todos.splice(index,1);	
			};

        }
]);
