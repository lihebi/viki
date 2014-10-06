'use strict';

describe('Service: roadmap', function () {

  // load the service's module
  beforeEach(module('vikiApp'));

  // instantiate service
  var roadmap;
  beforeEach(inject(function (_roadmap_) {
    roadmap = _roadmap_;
  }));

  it('should do something', function () {
    expect(!!roadmap).toBe(true);
  });

});
