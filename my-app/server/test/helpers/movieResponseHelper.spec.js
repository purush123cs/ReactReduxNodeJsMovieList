const expect  = require('chai').expect;
const sinon  = require('../hooks.js').sinon;
const movieResponseHelper = require('../../lib/helpers/movieResponseHelper.js');
const commonResponseHelper = require('../../lib/helpers/commonResponseHelper.js');
const movieVendorRes = require('../dataFiles/movieVendorRes.json');

describe('movieResponseHelper test', function () {
  describe('convertResponse function', function () {
    let getIdempotencyKeyStub;

    afterEach(() => {
      getIdempotencyKeyStub.restore();
    });
    
    it('return response', function () {
      let req = {"field1":"12345678"};
      getIdempotencyKeyStub = sinon.stub(commonResponseHelper, "getIdempotencyKey").returns("12345678");

      const response = movieResponseHelper.convertResponse(req, movieVendorRes);

      expect(getIdempotencyKeyStub.calledOnce).to.be.true;
      expect(response.statusCode).to.equal(200);
      expect(response.body.idempotencyKey).to.equal("12345678");

    });
  });
});
