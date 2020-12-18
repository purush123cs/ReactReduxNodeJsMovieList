const sinon = require("sinon");

exports.mochaHooks = {

  afterEach(done) {
    //Restore the default sandbox here to avoid memory leak as per Sinon documentation
    //https://sinonjs.org/releases/v9.0.3/general-setup/
    sinon.restore();
    done();
  }

};

exports.sinon = sinon;