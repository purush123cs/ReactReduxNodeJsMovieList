/* jshint strict: true */

/**
 * load environment variables for local development
 */
require('dotenv').config();

/**
 * module dependencies
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/router.js');
const defaultErrorHandler = require('./errHandlers/defaultErrorHandler.js');
const authorizationErrHandler = require('./errHandlers/authorizationErrHandler.js');
const badRequestErrHandler = require('./errHandlers/badRequestErrHandler.js');
const forbiddenErrHandler = require('./errHandlers/forbiddenErrHandler.js');
//const mongoDBConn = require('./utils/mongoDBConn.js');
const loggerUtil = require('./utils/loggerUtil.js');

/**
 * init
 */
const httpServer = express();

/**
 * enable cors
 */
httpServer.use(cors());
httpServer.options('*', cors());

/**
 * dispatch requests to the router
 */
httpServer.disable('x-powered-by');
httpServer.enable('etag', 'strict');
httpServer.use(bodyParser.json());
httpServer.use('/', router);

/**
 * use error handler middleware
 */
httpServer.use(authorizationErrHandler.errorHandler);
httpServer.use(badRequestErrHandler.errorHandler);
httpServer.use(forbiddenErrHandler.errorHandler);
httpServer.use(defaultErrorHandler.errorHandler);

/**
 * assign port for express web app
 */
const port = (process.env.HTTP_PORT || 3001);

/**
 * do startup work and instantiate express server
 */
async function initApp() {
	//await mongoDBConn.connect();
	// Start the express web server after the database connection is ready

	httpServer.listen(port, function () {
		'use strict';
		httpServer.emit('listened', port);
		loggerUtil.log("server started");
	});
}

/**
 * instantiate the app
 */
initApp();