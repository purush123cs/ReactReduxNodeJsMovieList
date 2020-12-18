/**
 * function to return idempotencyKey
 *
 */
exports.getIdempotencyKey = function(req) {
    'use strict';

    let idempotencyKey = undefined;

    if(req.body.idempotencyKey !== undefined && req.body.idempotencyKey !== null) {
        idempotencyKey = req.body.idempotencyKey;
    }
    
    return idempotencyKey;
};

