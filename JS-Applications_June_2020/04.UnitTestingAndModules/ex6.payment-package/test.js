const expect = require('chai').expect;
const PaymentPackage = require('./PaymentPackage');

describe('PaymentPackage', () => {
    const validName = 'My Package';
    const validValue = 120;

    describe('Instantiation and structure', () => {
        it('should work with valid parameters', () => {
            expect(() => new PaymentPackage(validName, validValue)).to.not.throw();
        });

        it('is correctly set up', () => {
            const instance = new PaymentPackage(validName,validValue)
            expect(instance.name).to.equal(validName);
            expect(instance.value).to.equal(validValue);
            expect(instance.VAT).to.equal(20);
            expect(instance.active).to.equal(true);
        });

        it('should not work with invalid name', () => {
            expect(() => new PaymentPackage('', validValue)).to.throw();
            expect(() => new PaymentPackage(undefined, validValue)).to.throw();
            expect(() => new PaymentPackage({}, validValue)).to.throw();
        });
        it('should not work with invalid parameters', () => {
            expect(() => new PaymentPackage(validName, '')).to.throw();
            expect(() => new PaymentPackage(validName, -3)).to.throw();
            expect(() => new PaymentPackage(validName, [])).to.throw();
        });
        it('has all properties', () => {
            const instance = new PaymentPackage(validName, validValue);

            expect(instance).to.have.property('name')
            expect(instance).to.have.property('value')
            expect(instance).to.have.property('VAT')
            expect(instance).to.have.property('active')
        });
    });

    describe('Accessors', () => {
        let instance = null;

        beforeEach(() => {
            instance = new PaymentPackage(validName, validValue);
        })

       
        it('accepts and sets valid name', () => {
            instance.name = 'New Package';
            expect(instance.name).to.equal('New Package');
        });

        it('rejecets invalid name', () => {
            expect(() => instance.name = '').to.throw();
            expect(() => instance.name = undefined).to.throw();
            expect(() => instance.name = {}).to.throw();
        });
        it('accepts and sets valid value', () => {
            instance.value = 90;
            expect( instance.value ).to.equal(90);
        });

        it('rejecets invalid name', () => {
            expect(() => instance.name = '').to.throw();
            expect(() => instance.name = undefined).to.throw();
            expect(() => instance.name = -5).to.throw();
        });

        it('accepts and sets valid VAT', () => {
            instance.VAT = 15;
            expect( instance.VAT ).to.equal(15);
        });

        it('rejecets invalid VAT', () => {
            expect(() => instance.VAT = '').to.throw();
            expect(() => instance.VAT = undefined).to.throw();
            expect(() => instance.VAT = -8).to.throw();
        });
        it('accepts and sets valid active', () => {
            instance.active = true;
            expect(instance.active).to.be.true;
            instance.active = false;
            expect(instance.active).to.be.false;
        });

        it('rejecets invalid VAT', () => {
            expect(() => instance.active = '').to.throw();
            expect(() => instance.active = undefined).to.throw();
            expect(() => instance.active = -8).to.throw();
        });
    });

    describe('String Info', () => {

        let instance = null;

        beforeEach(() => {
            instance = new PaymentPackage(validName, validValue);
        })

        it('contain the name', () => {
            expect(instance.toString()).to.contain(validName);
        });
        it('contain the VAT', () => {
            expect(instance.toString()).to.contain(validName.toString());
        });

        it('contain the VAT', () => {
            expect(instance.toString()).to.contain(instance.VAT +  '%');
        });
        it('displays inactive label', () => {
            instance.active = false;
            expect(instance.toString()).to.contain('(inactive)');
        });
       
        it('updates info through setters', () => {
            instance.name = 'New Package';
            instance.value = 90
            instance.VAT = 9

            const output = instance.toString();

            expect(output).to.contain('New Package')
            expect(output).to.contain('90')
            expect(output).to.contain('9%')
        });

    });
});
