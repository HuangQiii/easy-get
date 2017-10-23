'use strict';

var should = require('should');
var easyGet = require('./');

const testData = {
    a: {
        b: {
            c1: 1,
            c2: undefined,
            c3: null,
        }
    }
};

describe('easyGet Correct', function () {
    it('should return 1:', function () {
        easyGet.easyGet(testData, 'a.b.c1').should.eql(1);
    });

    it('should return undefined:', function () {
        easyGet.easyGet(testData, 'a.b.c2').should.eql(undefined);
    });

    it('should return null:', function () {
        easyGet.easyGet(testData, 'a.b.c3').should.eql(null);
    });
});

describe('easyGet Incorrect', function () {
    it('should return undefined:', function () {
        easyGet.easyGet(testData, 'a.c').should.eql(undefined);
    });

    it('should return null:', function () {
        easyGet.easyGet(testData, 'a.b.c4').should.eql(undefined);
    });

    it('should return null:', function () {
        easyGet.easyGet(testData, 'a.b.c4.d.e').should.eql(undefined);
    });
});