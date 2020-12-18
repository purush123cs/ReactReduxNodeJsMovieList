/* jshint strict: true */


/**
 * module dependencies
 */
const latency = require('response-time'); 
const router = require('express').Router();
const asyncWrapper = require('../utils/asyncWrapper.js');
const movieController = require('../controllers/movieController.js');

/**
 * setup latency middleware
 */
router.use(latency());

/**
 * setup routes
 */
router.get('/movie', asyncWrapper(movieController.movie));

/**
 * expose 'router'
 */
module.exports = router;
