const expect  = require('chai').expect;
const sinon  = require('../hooks.js').sinon;
const movieController = require('../../lib/controllers/movieController.js');
const movieService = require('../../lib/services/movieService.js');

describe('movie controller test', function () {
  describe('movie function', function () {
    let status, json, res, req, next, movieStub;

    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { status, json };
      status.returns(res);
      
      req = {};
      next = {};
    });

    afterEach(() => {
      movieStub.restore();
    });
    
    it('should return 200 as status code', async  function () {
      const resObj = {"statusCode": 200, "body":{"amount":200}};
      movieStub = sinon.stub(movieService, "movie").returns(resObj);

      await movieController.movie(req, res, next);

      expect(movieStub.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(resObj.statusCode);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0]).to.equal(resObj.body);
    });

    it('should return 500 as status code', async  function () {
      const resObj = {"statusCode": 500, "body":{"errorDetail":"Internal Server Error"}};
      movieStub = sinon.stub(movieService, "movie").returns(resObj);

      await movieController.movie(req, res, next);

      expect(movieStub.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(resObj.statusCode);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0]).to.equal(resObj.body);
    });
  });
});
