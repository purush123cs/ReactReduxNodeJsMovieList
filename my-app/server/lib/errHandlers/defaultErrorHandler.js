/**
 * module dependencies
 */
const loggerUtil = require('../utils/loggerUtil.js');
const commonResponseHelper = require('../helpers/commonResponseHelper.js');

/**
 * 'default errorHandler' middleware
 *
 */
exports.errorHandler = function(err, req, res, next) {
    'use strict';
    loggerUtil.log("in default express errorHandler middleware-err.msg:"+JSON.stringify(err.message));
    let error, httpStatusCode;
    
    try {
        error = JSON.parse(err.message);//for errors thrown by application code, etc
        httpStatusCode = error.code;
    } catch (exc) {
        error = err;//for Superagent timeout, etc which is not valid JSON string
        httpStatusCode = 500;
    }
    
    const data = {
        "httpStatusCode": httpStatusCode,
        "errorCode": (error.errorCode || '100'),
        "errorMessage": error.message,
        "errorDetail": (error.error || error.message),
        "idempotencyKey": commonResponseHelper.getIdempotencyKey(req)
    };

    res.status(httpStatusCode || 500).json(data);
}