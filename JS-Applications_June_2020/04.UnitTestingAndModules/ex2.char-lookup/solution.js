function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return 'Incorrect index';
    }
    return string.charAt(index);
}

const expect = require('chai').expect;

describe('Main', () => {
    const testString = 'seagull';

    describe('Invalid parameters', () => {

        it('should return undefined for non-string first param', () => {
            expect(lookupChar(null,0)).to.equal(undefined);
        });
        it('should return undefined for non-number second param', () => {
            expect(lookupChar(testString,'3')).to.equal(undefined);
        });
        it('should return undefined for non-integer', () => {
            expect(lookupChar(testString,3.14)).to.equal(undefined);
        });
    });

    describe('Out of range', () => {

        it('should return undefined below 0', () => {
            expect(lookupChar(testString,-1)).to.equal('Incorrect index');
        });
        it('should return undefined below 0', () => {
            expect(lookupChar(testString,7)).to.equal('Incorrect index');
        });
    });

    describe('happy path', () => {

        it('should return s', () => {
            expect(lookupChar(testString,0)).to.equal('s');
        });
        it('should return a', () => {
            expect(lookupChar(testString,2)).to.equal('a');
        });
        it('should return u', () => {
            expect(lookupChar(testString,4)).to.equal('u');
        });
        
    });
})