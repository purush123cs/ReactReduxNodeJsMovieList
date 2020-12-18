const chai  = require('chai');
const expect  = chai.expect;
chai.use(require('chai-as-promised'));
const proxyquire = require('proxyquire');
const sinon  = require('../hooks.js').sinon;
const commonRequestHelper = require('../../lib/helpers/commonRequestHelper.js');


describe('commonRequestHelper test', function() {
  describe('getField1Header functions', function() {
    it('input request header has Field1', function() {
      let req, header, trim;
      header = sinon.stub();
      trim = sinon.spy();
      req = { header, trim };
      header.returns("2020-08-05T10:55:00");

      const field1 = commonRequestHelper.getField1Header(req);

      expect(field1).to.equal("2020-08-05T10:55:00");
    });

    it('input request header does not have Field1', function() {
      let req, header, trim;
      header = sinon.stub();
      trim = sinon.spy();
      req = { header, trim };
      header.returns("");

      const field1 = commonRequestHelper.getField1Header(req);

      expect(field1).to.not.equal("");
      expect(field1).to.not.equal(null);
      expect(field1).to.not.equal(undefined);
    });

  });

  describe('getTransactionIdHeader functions', function() {
    it('random-number-csprng throws exception', async function() {
      let req, header, trim;
      header = sinon.stub();
      trim = sinon.spy();
      req = { header, trim };
      header.returns("");

      let randomNumber = sinon.fake.throws(new Error('Some Error'));
      const commonRequestHelper = proxyquire("../../lib/helpers/commonRequestHelper", {
        'random-number-csprng': randomNumber,
      });

      await expect(commonRequestHelper.getTransactionIdHeader(req)).to.be.rejectedWith(Error);
    });
  });

});
