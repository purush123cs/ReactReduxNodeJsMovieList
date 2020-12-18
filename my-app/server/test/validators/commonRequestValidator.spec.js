const expect  = require('chai').expect;
const sinon  = require('../hooks.js').sinon;
const commonRequestValidator = require('../../lib/validators/commonRequestValidator.js');

describe('commonRequestValidator test', function () {
  
  describe('validateHeader function', function () {
    let req, header, indexOf;

    beforeEach(() => {
      header = sinon.stub();
      indexOf = sinon.spy();
      req = { header, indexOf };
    });
    
    it('invalid content type', function () {
      header.returns("application/octet-stream");

      expect(() => commonRequestValidator.validateHeader(req)).to.throw();
    });

    it('invalid header 1', function () {
      header.onFirstCall().returns("application/json");
      header.onSecondCall().returns(undefined);

      expect(() => commonRequestValidator.validateHeader(req)).to.throw();
    });
  });
  
  describe('validateBody function', function () {
    it('field1 not present in request', function () {
      const req = {
        "body":
        {
          "field2": 777
        }
      };

      expect(() => commonRequestValidator.validateBody(req)).to.throw();
    });

    it('field1 is null in request', function () {
      const req = {
        "body":
        {
          "field2": 777,
          "field3": null
        }
      };

      expect(() => commonRequestValidator.validateBody(req)).to.throw();
    });
  });

});
