const expect = require('chai').expect;
const StringBuilder = require('./StringBuilderClass');

describe('StringBuilderClass', () => {
    let input = 'test';
    describe('Instantiation', () => {

        it('should work with valid parameters', () => {
            expect(() => new StringBuilder(input)).to.not.throw();
        })
        it('should work without parameters', () => {
            expect(() => new StringBuilder()).to.not.throw();
        })
        it('should throw error with number parameter', () => {
            expect(() => new StringBuilder(2)).to.throw();
        })
    })

    describe('Append', () => {

        let strBuilder = null;
        beforeEach(function () {
            strBuilder = new StringBuilder();
        })

        it('should initialize _stringArray to an empty array', () => {
            expect(strBuilder._stringArray instanceof Array).to.be.true;
            expect(strBuilder._stringArray.length).to.equal(0)
        })
        it('should have all of the properties', () => {
            expect(strBuilder.hasOwnProperty('_stringArray')).to.be.true;
        })

        it('should have functions attached to the prototype', function () {
            expect(Object.getPrototypeOf(strBuilder).hasOwnProperty('append')).to.be.true;
            expect(Object.getPrototypeOf(strBuilder).hasOwnProperty('prepend')).to.be.true;
            expect(Object.getPrototypeOf(strBuilder).hasOwnProperty('insertAt')).to.be.true;
            expect(Object.getPrototypeOf(strBuilder).hasOwnProperty('remove')).to.be.true;
            expect(Object.getPrototypeOf(strBuilder).hasOwnProperty('toString')).to.be.true;
        });
    })

    describe('Tests constructor with parameters', function () {
        let strBuilder = null;

        beforeEach(function () {
            strBuilder = new StringBuilder(input);
        });

        it('should initialize _stringArray correctly', function () {
            expect(strBuilder._stringArray instanceof Array).to.be.true;
            const arrayInitial = strBuilder._stringArray;
            const expArray = Array.from(input);

            arrCompare(arrayInitial, expArray);
        });

        it('should append correctly', function () {
            const stringToAppend = 'hello';
            strBuilder.append(stringToAppend);

            const arrayInitial = strBuilder._stringArray;
            const expArray = Array.from(input + stringToAppend);

            arrCompare(arrayInitial, expArray);
        });

        it('should prepend correctly', function () {
            const stringToPrepend = 'hi';
            strBuilder.prepend(stringToPrepend);

            const arrayInitial = strBuilder._stringArray;
            const expArray = Array.from(stringToPrepend + input);

            arrCompare(arrayInitial, expArray);
        });

        it('should insertAt correctly', function () {
            const strToInsert = 'sky';
            strBuilder.insertAt(strToInsert, 3);

            const arrayInitial = strBuilder._stringArray;
            const expArray = Array.from(input);

            expArray.splice(3, 0, ...strToInsert);
            arrCompare(arrayInitial, expArray);
        });

        it('should remove correctly', function () {
            strBuilder.remove(0, 5);

            const arrayInitial = strBuilder._stringArray;
            const expArray = Array.from(strBuilder);

            arrCompare(arrayInitial, expArray);
        });

        it('should stringify correctly', function () {
            expect(strBuilder.toString()).to.equal(input);
        });
    });

    function arrCompare(initial, expectArr) {
        expect(initial.length).to.equal(expectArr.length);

        for (let i = 0; i < initial.length; i++) {
            expect(initial[i]).to.equal(expectArr[i]);
        }
    }
})