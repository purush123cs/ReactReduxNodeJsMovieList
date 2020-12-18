/**
 * module dependencies
 */
const loggerUtil = require('../utils/loggerUtil.js');
const commonResponseHelper = require('../helpers/commonResponseHelper.js');

/**
 * 'bad request errorHandler' middleware
 *
 */
exports.errorHandler = function(err, req, res, next) {
    'use strict';
    if (err.status === 400) {
        loggerUtil.log("in badRequestErrHandler middleware:"+JSON.stringify(err));
        const data = {
            "httpStatusCode": 400,
            "errorCode": (err.errorCode || '100'),
            "errorMessage": err.message,
            "errorDetail": JSON.parse(err.response.text).ResponseMessage || 'Bad Request',
            "idempotencyKey": commonResponseHelper.getIdempotencyKey(req)
        };
        res.status(400).json(data);
    } else {
        return next(err);
    }
}