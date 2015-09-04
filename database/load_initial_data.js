var db = require('./../models/index');
var sequelizeFixtures = require("sequelize-fixtures");
var models = {
	Admin: db.Admin,
	AdminGroup: db.AdminGroup,
	User: db.User
};
console.log("File loaded");
sequelizeFixtures.loadFile("fixtures/initial_seed.json", models).then(function() {
	// Confirm that the fixtures load correctly
	console.log("Upload complete");
});

