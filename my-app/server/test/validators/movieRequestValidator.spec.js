const expect  = require('chai').expect;
const sinon  = require('../hooks.js').sinon;
const movieRequestValidator = require('../../lib/validators/movieRequestValidator.js');
const commonRequestValidator = require('../../lib/validators/commonRequestValidator.js');

describe('movieRequestValidator test', function () {
  describe('validateRequest function', function () {
    let validateHeaderStub, validateBodyStub;

    afterEach(() => {
      validateHeaderStub.restore();
      validateBodyStub.restore();
    });

    it('positive scenario - no error thrown', function () {
      const req = {
        "body":
        {
          "a": 1
        }
      };
      validateHeaderStub = sinon.stub(commonRequestValidator, "validateHeader");
      validateBodyStub = sinon.stub(commonRequestValidator, "validateBody");

      movieRequestValidator.validateRequest(req);

      expect(validateHeaderStub.calledOnce).to.be.true;
      expect(validateBodyStub.calledOnce).to.be.true;
      expect(() => movieRequestValidator.validateRequest(req)).to.not.throw();
    });

  });
});
