"use strict";

var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/config.json')[env];
var Sequelize = require("sequelize");
var sequelize = new Sequelize(config.database, config.username, config.password, config);

exports.sequelize = sequelize;
exports.all = [];
['Account', 'Admin', 'AdminGroup', 'Category', 'LoginAttempt', 'Message', 'Note', 'Status', 'StatusLog','User'].forEach( function (model) {
    var mod = sequelize.import(__dirname + '/' + model);
    module.exports[model] = mod;
    exports.all.push(mod);
});

(function (model) {
		console.log("DEBUG: 1");
    model.User.belongsTo(model.Admin);
		console.log("DEBUG: 2");
    model.Message.belongsTo(model.User);
		console.log("DEBUG: 3");
    model.Account.belongsTo(model.User);
		console.log("DEBUG: 4");
    model.Admin.belongsTo(model.AdminGroup);
})(exports);

