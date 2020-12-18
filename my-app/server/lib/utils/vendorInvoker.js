/**
 * module dependencies
 */
const http = require('http');
const superagent = require('superagent');
const errorMessages = require('../errorMessages.json');
const loggerUtil = require('../utils/loggerUtil.js');

/**
 * variables
 */

/**
 * function to call Vendor
 *
 */
exports.callVendor = async function(req, reqVendor) {
    'use strict';
    loggerUtil.log("entering callVendor");

    let retriesAttempted = 0;

    const vendorAPIResponse = await callVendorAPI(req, reqVendor, retriesAttempted);
    loggerUtil.log("exiting callVendor");
    return vendorAPIResponse;
}

async function callVendorAPI(req, reqVendor, retriesAttempted) {
    loggerUtil.log("entering callVendorAPI");
    loggerUtil.log("request to Vendor:"+JSON.stringify(reqVendor));
    
    const response = await superagent 
                    .post(reqVendor.url)
                    .send(reqVendor.reqBodyVendor)
                    .set(reqVendor.reqHeaderVendor)
                    .timeout(process.env.MOVIE_API_TIMEOUT_IN_MS || 20000);
    loggerUtil.log("\nresponse received from Vendor:"+JSON.stringify(response));

    if (response.body === null || response.body === undefined ||
        (typeof response.body === 'object' && (response.body.length === 0 || Object.keys(response.body).length === 0))) {
            loggerUtil.log("exiting callVendorAPI. Valid body object not present in response received");
            throw new Error(JSON.stringify({ code: 500, message: http.STATUS_CODES[500], error: errorMessages.VALID_BODY_NOT_RECEIVED }));
    } else {
        loggerUtil.log("exiting callVendorAPI. Valid response received");
        return response;
    }
}
