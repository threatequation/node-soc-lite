var should = require('chai').should(),
    csrf = require('../lib/csrf'),


describe('#escape', function() {
  it('converts & into &amp;', function() {
    csrf('123abc').should.equal('generateAuthToken');
  });


});