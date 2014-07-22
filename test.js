var app = require('./app');
var should = require('should');
var request = require('supertest');


describe('app', function() {
    it('should exist', function() {
	should.exist(app);
    });
    
    it('should return 404 at localhost:' + app.get('port'), function(done) {

	request(app)
	    .get('/')
	    .expect('Content-Type', /html/)
	    .expect(404, done);
    });
});

	    
