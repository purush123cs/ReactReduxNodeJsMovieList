const expect  = require('chai').expect;
const sinon  = require('../hooks.js').sinon;
const movieRequestHelper = require('../../lib/helpers/movieRequestHelper.js');
const commonRequestHelper = require('../../lib/helpers/commonRequestHelper.js');

describe('movieRequestHelper test', function () {
  describe('convertRequest function', function () {
    let getTransactionIdHeaderStub, getField1HeaderStub;
    
    afterEach(() => {
      getTransactionIdHeaderStub.restore();
      getField1HeaderStub.restore();
    });

    it('return response', async function () {
      const token = "token123";
      let req, header, trim;
      let body = 
      {
        
          "a":"b"
      };

      header = sinon.stub();
      trim = sinon.spy();
      req = { body, header, trim };
      header.returns("vendor1");

      getTransactionIdHeaderStub = sinon.stub(commonRequestHelper, "getTransactionIdHeader").returns(1);
      getField1HeaderStub = sinon.stub(commonRequestHelper, "getField1Header").returns("2020-07-30T10:66:00");

      const reqVendor = await movieRequestHelper.convertRequest(req, token);

      expect(getTransactionIdHeaderStub.calledOnce).to.be.true;
      expect(getField1HeaderStub.calledOnce).to.be.true;

      expect(reqVendor.reqHeaderVendor["Content-Type"]).to.equal("application/json");
    });

  });
});
