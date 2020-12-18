const expect  = require('chai').expect;
const sinon  = require('../hooks.js').sinon;
const movieService = require('../../lib/services/movieService.js');
const movieReqHelper = require('../../lib/helpers/movieRequestHelper.js');
const movieResHelper = require('../../lib/helpers/movieResponseHelper.js');
const movieReqValidator = require('../../lib/validators/movieRequestValidator.js');
const vendorInvoker = require('../../lib/utils/vendorInvoker.js');

describe('movie service test', function () {
  describe('movie function', function () {
    let req, validateRequestStub, convertRequestStub, convertResponseStub;

    beforeEach(() => {
      req = {};
    });

    afterEach(() => {
      validateRequestStub.restore();
      convertRequestStub.restore();
      convertResponseStub.restore();
    });

    it('return response', async  function () {
      validateRequestStub = sinon.stub(movieReqValidator, "validateRequest").returns(true);
      convertRequestStub = sinon.stub(movieReqHelper, "convertRequest").returns({"req":"req1"});
      movieResHelperResp = {"res1":"res11"};
      convertResponseStub = sinon.stub(movieResHelper, "convertResponse").returns(movieResHelperResp);

      const resObj = await movieService.movie(req);

      expect(validateRequestStub.calledOnce).to.be.true;
      expect(convertRequestStub.calledOnce).to.be.true;
      expect(convertResponseStub.calledOnce).to.be.true;
      expect(resObj).to.equal(movieResHelperResp);
    });
  });
});
