/**
 * module dependencies
 */
const loggerUtil = require('../utils/loggerUtil.js');
const commonResponseHelper = require('../helpers/commonResponseHelper.js');

/**
 * 'forbidden errorHandler' middleware
 *
 */
exports.errorHandler = function(err, req, res, next) {
    'use strict';
    if (err.status === 403) {
        loggerUtil.log("in forbiddenErrHandler middleware:"+JSON.stringify(err));
        const data = {
            "httpStatusCode": 403,
            "errorCode": (err.errorCode || '100'),
            "errorMessage": err.message || 'Forbidden',
            "errorDetail": JSON.parse(err.response.text).ResponseMessage || 'Forbidden',
            "idempotencyKey": commonResponseHelper.getIdempotencyKey(req)
        };
        res.status(403).json(data);
    } else {
        return next(err);
    }
}