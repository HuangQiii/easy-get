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
// console.log(easyGet.easyGet(testData,'a.b.c2'))
describe('easyGet Correct', function () {
    it('should return 1:', function () {
        easyGet.easyGet(testData, 'a.b.c1').should.eql(1);
    });

    it('should return undefined:', function () {
        (easyGet.easyGet(testData, 'a.b.c2') === undefined).should.be.true;
    });

    it('should return null:', function () {
        (easyGet.easyGet(testData, 'a.b.c3') === null).should.be.true;
    });
});

describe('easyGet Incorrect', function () {
    it('should return undefined:', function () {
        (easyGet.easyGet(testData, 'a.c') === undefined).should.be.true;
    });

    it('should return null:', function () {
        (easyGet.easyGet(testData, 'a.b.c4') === undefined).should.be.true;
    });

    it('should return null:', function () {
        (easyGet.easyGet(testData, 'a.b.c4.d.e') === undefined).should.be.true;
    });
});