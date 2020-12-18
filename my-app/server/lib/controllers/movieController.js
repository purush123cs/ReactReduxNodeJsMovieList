/**
 * module dependencies
 */
const movieService = require('../services/movieService.js');
const loggerUtil = require('../utils/loggerUtil.js');

/**
 * controller to handle the movie request
 *
 */
exports.movie = async function(req, res, next) {
    'use strict';
    loggerUtil.log("entering movie controller");
    
    const resObj = await movieService.movie(req);
    loggerUtil.log("exiting movie controller");
    res.status(resObj.statusCode || 200).json(resObj.body);
};