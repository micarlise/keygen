
const expect = require('expect.js');
const keyGen = require('../src/keyGen');

describe('KeyGen', function() {
    it ('should return an 8 character key', function() {
        keyGen(8)
            .then(code => {
                expect(code.length).to.eql(8);
            });
    });

    it ('should return an 16 character key', function() {
        keyGen(16)
            .then(code => {
                expect(code.length).to.eql(16);
            });
    });

    it ('should return an 8 char key when no keySize is given character key', function() {
        keyGen()
            .then(code => {
                expect(code.length).to.eql(8);
            });
    });
});
