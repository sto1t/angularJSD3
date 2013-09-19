'use strict';

describe('Controller: TreesCtrl', function () {

  // load the controller's module
  beforeEach(module('angD3App'));

  var TreesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TreesCtrl = $controller('TreesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
