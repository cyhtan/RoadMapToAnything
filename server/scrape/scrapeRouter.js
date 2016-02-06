var scrapeController = require('./scrapeController.js'),
    auth = require('../auth.js').authenticate;

module.exports = function (Router) {

  /*
   *      All routes begin with /scrape
   */

  Router.get( '/test', auth, scrapeController.test );

};
