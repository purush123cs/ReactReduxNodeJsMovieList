/**
 * module dependencies
 */
//const movieReqHelper = require('../helpers/movieRequestHelper.js');
//const movieResHelper = require('../helpers/movieResponseHelper.js');
//const movieReqValidator = require('../validators/movieRequestValidator.js');
//const vendorInvoker = require('../utils/vendorInvoker.js');
const loggerUtil = require('../utils/loggerUtil.js');

/**
 * service to handle the movie request
 *
 */
exports.movie = async function(req) {
    'use strict'; 
    loggerUtil.log("entering movie service");
    //movieReqValidator.validateRequest(req);

    //const reqVendor = await movieReqHelper.convertRequest(req);

    //loggerUtil.log("call movie API");
    //const vendorBasePath = "https://" + (process.env.MOVIE_API_HOST || "");
    //reqVendor.url = vendorBasePath + "/movies";
    
    //const resVendor = await vendorInvoker.callVendor(req, reqVendor);
    //loggerUtil.log("response body from Vendor for movie:"+JSON.stringify(resVendor.body));

    //const resObj = movieResHelper.convertResponse(req, resVendor);
    //simulate api call-start
    let resObj = {};
    resObj.body = getMovieDetails();
    //simulate api call-end

    loggerUtil.log("exiting movie service:"+JSON.stringify(resObj));

    return resObj;
};

function getMovieDetails() {
    const movieDtls = {
        "data": [
          {
            "Title": "Italian Spiderman",
            "Year": 2007,
            "imdbID": "tt2705436"
          },
          {
            "Title": "Superman, Spiderman or Batman",
            "Year": 2011,
            "imdbID": "tt2084949"
          },
          {
            "Title": "Spiderman",
            "Year": 1990,
            "imdbID": "tt0100669"
          },
          {
            "Title": "Spiderman 2",
            "Year": 2010,
            "imdbID": "tt1785572"
          },
          {
            "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
            "Year": 2007,
            "imdbID": "tt1132238"
          },
          {
            "Title": "Spiderman and Grandma",
            "Year": 2009,
            "imdbID": "tt1433184"
          },
          {
            "Title": "The Amazing Spiderman T4 Premiere Special",
            "Year": 2012,
            "imdbID": "tt2233044"
          },
          {
            "Title": "Amazing Spiderman Syndrome",
            "Year": 2012,
            "imdbID": "tt2586634"
          },
          {
            "Title": "Hollywood's Master Storytellers: Spiderman Live",
            "Year": 2006,
            "imdbID": "tt2158533"
          },
          {
            "Title": "Spiderman 5",
            "Year": 2008,
            "imdbID": "tt3696826"
          }
        ]
      };

      return movieDtls;
}
