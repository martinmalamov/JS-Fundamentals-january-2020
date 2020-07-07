let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

const expect = require('chai').expect;

describe('mathEnfocer', () => {
    describe('addFive', () => {
        it('should return undefined result with a  non-number parameter', () => {
            expect(mathEnforcer.addFive('dsadas')).to.equal(undefined)
        })
        it('should return correct result with a  number parameter', () => {
            expect(mathEnforcer.addFive(5)).to.be.eq(10)
            expect(mathEnforcer.addFive(-5)).to.equal(0)
            expect(mathEnforcer.addFive(-3.14)).to.be.closeTo(1.86, 0.01)
        })
    })
    describe('subtractTen', () => {
        it('should return undefined result with a  non-number parameter', () => {
            expect(mathEnforcer.subtractTen('dsadas')).to.equal(undefined)
        })
        it('should return correct result with a positive , negative and floating-point numbers', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.eq(0)
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
            expect(mathEnforcer.subtractTen(15)).to.be.closeTo(4.99, 0.01)
            expect(mathEnforcer.subtractTen(5.10)).to.be.closeTo(-4.90, 0.01)
        })
    })
    describe('sum', () => {
        it('should return undefined result without two number parameter', () => {
            expect(mathEnforcer.sum('not a number', 'not a number')).to.equal(undefined)
            expect(mathEnforcer.sum(1, 'not a number')).to.equal(undefined)
            expect(mathEnforcer.sum('not a number', 1)).to.equal(undefined)
        })
        it('should return correct result with a two number parameter', () => {
            expect(mathEnforcer.sum(5, 5)).to.be.eq(10)
            expect(mathEnforcer.sum(15, -5)).to.be.closeTo(10, 0.01)
            expect(mathEnforcer.sum(-5 , -3.10)).to.equal(-8.10)

        })
    })
})
