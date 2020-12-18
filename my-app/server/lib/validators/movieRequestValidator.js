/**
 * module dependencies
 */
const http = require('http');
const errorMessages = require('../errorMessages.json');
const commonRequestValidator = require('./commonRequestValidator.js');

/**
 * function to validate input request
 *
 */
exports.validateRequest = function(req) {
    'use strict';

    validateHeader(req);
    validateBody(req);
};

/**
 * function to validate input request header
 *
 */
function validateHeader(req) {
    'use strict';

    commonRequestValidator.validateHeader(req);
}

/**
 * function to validate input request body
 *
 */
function validateBody(req) {
    'use strict';

    commonRequestValidator.validateBody(req);
    //if(req.body.field1 === undefined || req.body.field1 === null) {
      // throw new Error(JSON.stringify({ code: 400, message: http.STATUS_CODES[400], error: errorMessages.MANDATORY_BODY_DATA_FIELD1_MISSING }));
    //}
    
}

