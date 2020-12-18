/**
 * module dependencies
 */
const http = require('http');
const errorMessages = require('../errorMessages.json');

/**
 * function to validate common input request headers
 *
 */
exports.validateHeader = function(req) {
    'use strict';

    if((req.header('Content-Type')).indexOf("application/json") === -1) {
        throw new Error(JSON.stringify({ code: 400, message: http.STATUS_CODES[400], error: errorMessages.HEADER_CONTENT_TYPE }));
    }
}

/**
 * function to validate common body parameters
 *
 */
exports.validateBody = function(req) {
    'use strict';

    
}
