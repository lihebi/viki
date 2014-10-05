'use strict';

describe('Controller: BreadCtrl', function () {

  // load the controller's module
  beforeEach(module('vikiApp'));

  var BreadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BreadCtrl = $controller('BreadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
