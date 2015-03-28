'use strict';

describe('Controller: AccountsController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var AccountsController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        AccountsController = $controller('AccountsController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
