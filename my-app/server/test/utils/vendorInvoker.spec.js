const chai  = require('chai');
const expect  = chai.expect;
chai.use(require('chai-as-promised'));
const nock = require('nock')
const sinon  = require('../hooks.js').sinon;
const vendorInvoker = require('../../lib/utils/vendorInvoker.js');
