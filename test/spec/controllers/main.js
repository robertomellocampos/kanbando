'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('myPeopleAppApp'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   console.log(scope);
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
