'use strict';

describe('Service: posthtml', function () {

  // load the service's module
  beforeEach(module('vikiApp'));

  // instantiate service
  var posthtml;
  beforeEach(inject(function (_posthtml_) {
    posthtml = _posthtml_;
  }));

  it('should do something', function () {
    expect(!!posthtml).toBe(true);
  });

});
