var mocha = require('mocha');
var chai = require('chai');
var Browser = require('zombie');
var expect = chai.expect;
var server = require('../server.js')

describe('Index page', function(){

  var browser = null;

  before(function(done){
    this.server = server.listen(4000);
    browser = Browser.create({site: "http://localhost:4000"});
    done();
  });

  after(function(done){
    this.server.close(done);
  });

  it('should say Arduino Control Room', function(done){
    browser.visit('/', function(error){
      expect(browser.text('h1')).to.eql('Arduino Control Room');
      done();
    });
  });
});
