'use strict';

describe('Controller: AboutController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var AboutController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutController = $controller('AboutController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
