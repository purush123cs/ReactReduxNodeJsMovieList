/**
 * module dependencies
 */
const loggerUtil = require('../utils/loggerUtil.js');
const commonResponseHelper = require('../helpers/commonResponseHelper.js');

/**
 * 'authorization errorHandler' middleware
 *
 */
exports.errorHandler = function(err, req, res, next) {
    'use strict';
    if (err.status === 401) {
        loggerUtil.log("in authorizationErrHandler middleware:"+JSON.stringify(err));
        const data = {
            "httpStatusCode": 401,
            "errorCode": (err.errorCode || '100'),
            "errorMessage": err.message,
            "errorDetail": JSON.parse(err.response.text).ResponseMessage || 'UnAuthorized',
            "idempotencyKey": commonResponseHelper.getIdempotencyKey(req)
        };
        res.status(401).json(data);
    } else {
        return next(err);
    }
}