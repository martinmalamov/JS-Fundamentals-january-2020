const expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return ' even ';
    }
    return 'odd';
}

describe('Od or Even', ()=>{
    it('should return odd', ()=>{
        expect(isOddOrEven('aaa')).to.equal('odd');
    });
    it('should return even', ()=>{
        expect(isOddOrEven('aaa')).to.equal('odd');
    });
    it('should return undefined for non-strings', ()=>{
        expect(isOddOrEven(5)).to.equal(undefined);
        expect(isOddOrEven([])).to.equal(undefined);
        expect(isOddOrEven({})).to.equal(undefined);
    });
})