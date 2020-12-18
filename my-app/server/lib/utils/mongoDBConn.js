/**
 * module dependencies
 */
const { MongoClient } = require("mongodb");
const loggerUtil = require('../utils/loggerUtil.js');

/**
 * variables
 */
let db;

/**
 * function to create a mongoDB connection pool
 * Note: Do not close the connection
 *
 */
exports.connect = async function() {
    // Connection URI
    const uri = getDBURI();

    // Create a new MongoClient
    const mongoClient = new MongoClient(uri);

    // Connect the client to the server
    await mongoClient.connect();

    // Establish connection
    db = mongoClient.db(process.env.DB_NAME || "movieDB");
}

/**
 * function to form mongoDB connection uri
 *
 */
function getDBURI() {
  
  const uri =
    ((process.env.NODE_ENV && (process.env.NODE_ENV).toUpperCase() !== 'LOCAL')?"mongodb+srv://":"mongodb://")
    + (process.env.MONGO_SERVER_USER || "superuser") + ":" 
    + (process.env.MONGO_SERVER_PASSWORD || "password") + "@"
    + (process.env.MONGO_SERVER_HOST || "localhost:27017") + "/?" 
    + "poolSize=" + (process.env.MONGODB_CONNECTION_POOL_SIZE || 5)
    + "&retryWrites=true&w=majority&useUnifiedTopology=true";
    
    loggerUtil.log("mongoDB uri:"+uri);
    return uri;
}

/**
 * expose the DB connection object for the connection to be reused
 *
 */
exports.getDBObj = function() {
  return db;
}
