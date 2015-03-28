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
