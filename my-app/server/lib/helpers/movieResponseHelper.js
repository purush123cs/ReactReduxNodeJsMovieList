/**
 * module dependencies
 */
const loggerUtil = require('../utils/loggerUtil.js');
const commonResponseHelper = require('./commonResponseHelper.js');

/**
 * function to convert Vendor response to output response
 *
 */
exports.convertResponse = function(req, responseVendor) {
    'use strict';
    loggerUtil.log("entering convertResponse of movie");

    let responseObj = {};
    responseObj.statusCode = responseVendor.statusCode;
    responseObj.body = getResponseBody(req, responseVendor.body);

    loggerUtil.log("exiting convertResponse of movie:"+JSON.stringify(responseObj));
    return responseObj;
};

/**
 * function to convert Vendor response body to output response body
 *
 */
function getResponseBody(req, responseBodyVendor) {
    'use strict';
    
    let responseBody = {};
    responseBody.field1 = responseBodyVendor.fieldA;

    return responseBody;
}