/**
 * module dependencies
 */
const http = require('http');
const randomNumber = require("random-number-csprng");
const errorMessages = require('../errorMessages.json');

/**
 * function to generate random number
 *
 */
async function generateRandomNumber(isRetryAllowed) {
    try {
        return await randomNumber(1, 1073741823) + await randomNumber(1, 1073741823);
    } catch (exc) {
        if (isRetryAllowed) {
            return generateRandomNumber(false);
        } else {
            throw new Error(JSON.stringify({ code: 500, message: http.STATUS_CODES[500], error: errorMessages.TRANSACTION_ID_GENERATION_ERR })); 
        }
    }
}