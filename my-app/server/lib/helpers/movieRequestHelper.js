/**
 * module dependencies
 */
const loggerUtil = require('../utils/loggerUtil.js');
const commonRequestHelper = require('./commonRequestHelper.js');

/**
 * function to convert input request to Vendor request
 *
 */
exports.convertRequest = async function(req, authToken) {
    'use strict';

    let reqVendor = {};
    reqVendor.reqHeaderVendor = await convertHeader(req, authToken);
    reqVendor.reqBodyVendor = convertBody(req);
    return reqVendor;
};

/**
 * function to convert input header to Vendor request header
 *
 */
async function convertHeader(req, authToken) {
    'use strict';

    let reqHeaderVendor = {};
    reqHeaderVendor["Content-Type"] = "application/json";
    reqHeaderVendor["Authorization"] = "Bearer " + authToken;
    
    reqHeaderVendor["Field1"] = await commonRequestHelper.getField1Header(req);

    if(req.header('Field2') !== undefined && 
       req.header('Field2') !== "null" &&
       req.header('Field2').trim() !== '') {
       reqHeaderVendor["Field2"] = req.header('Field2');
    }
    
    return reqHeaderVendor;
}

/**
 * function to convert input body to Vendor request body
 *
 */
function convertBody(req) {
    
}
    