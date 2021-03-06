/*global describe, it*/
var app = require('../app')
    , request = require('supertest');
describe('vision master page', function(){
    'use strict';

    describe('when requesting resource /', function(){
        it('should respond with view', function(done){
            request(app)
                .get('/')
                .expect('Content-Type', /html/)
                .expect(200, done);
        });
    });
});
