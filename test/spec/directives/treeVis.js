'use strict';

describe('Directive: treeVis', function () {

  // load the directive's module
  beforeEach(module('angD3App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tree-vis></tree-vis>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the treeVis directive');
  }));
});
