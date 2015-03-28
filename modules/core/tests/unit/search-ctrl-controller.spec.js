'use strict';

describe('Controller: SearchCtrlController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var SearchCtrlController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        SearchCtrlController = $controller('SearchCtrlController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
