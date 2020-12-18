const expect  = require('chai').expect;
const commonResponseHelper = require('../../lib/helpers/commonResponseHelper.js');

describe('commonResponseHelper test', function () {
  describe('getIdempotencyKey function', function () {
    it('return idempotency key sent in request', function () {
      let req = 
        {
          "body":
            {
              "idempotencyKey":"1234568"
            }
        }

      const idempotencyKey = commonResponseHelper.getIdempotencyKey(req);

      expect(idempotencyKey).to.equal("1234568");
    });

    it('return idempotency key as undefined if not sent in request', function () {
      let req = 
        {
          "body":
            {
              "field1":777
            }
        }

      const idempotencyKey = commonResponseHelper.getIdempotencyKey(req);

      expect(idempotencyKey).to.equal(undefined);
    });
  });
});
