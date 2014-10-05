'use strict';

describe('Service: bread', function () {

  // load the service's module
  beforeEach(module('vikiApp'));

  // instantiate service
  var bread;
  beforeEach(inject(function (_bread_) {
    bread = _bread_;
  }));

  it('should do something', function () {
    expect(!!bread).toBe(true);
  });

});
