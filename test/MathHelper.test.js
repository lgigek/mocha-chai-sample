const chai = require('chai'),
    spies = require('chai-spies'),
    expect = chai.expect;

const {MathHelper} = require('../src/MathHelper.js');

describe('MathHelper', () => {

    chai.use(spies);

    beforeEach(() => {

        this.mathHelper = new MathHelper();
    });

    it('should do addition operation when called with addition', () => {

        chai.spy.on(this.mathHelper, '__add');

        expect(this.mathHelper.calc('addition', 1, 1)).to.equal(2);
        expect(this.mathHelper.__add).to.have.been.called();
    });

    it('should do subtraction operation when called with subtraction', () => {

        chai.spy.on(this.mathHelper, '__sub');

        expect(this.mathHelper.calc('subtraction', 1, 1)).to.equal(0);
        expect(this.mathHelper.__sub).to.have.been.called();
    });

    it('should do multiplication operation when called with multiplication', () => {

        chai.spy.on(this.mathHelper, '__mult');

        expect(this.mathHelper.calc('multiplication', 2, 2)).to.equal(4);
        expect(this.mathHelper.__mult).to.have.been.called();
    });

    it('should do division operation when called with division', () => {

        chai.spy.on(this.mathHelper, '__div');

        expect(this.mathHelper.calc('division', 4, 2)).to.equal(2);
        expect(this.mathHelper.__div).to.have.been.called();
    });

    it('should return undefined if operation is unknown', () => {

        debugger;

        expect(this.mathHelper.calc('unknown-operation', 0, 0)).to.equal(undefined);
    });


});