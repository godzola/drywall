/* Specs for the load_initial_data-spec.js route, a data fixture
 * file uploader for the Drywal applicatin
 */

 var db = require('./../models/index', {logging:console.log}),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');
