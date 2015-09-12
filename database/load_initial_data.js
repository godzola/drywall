var db = require("./../models/index");
var sequelizeFixtures = require("sequelize-fixtures");
var models = {
	Admin: db.Admin,
	AdminGroup: db.AdminGroup,
	User: db.User
};
console.log("DEBUG: Before loadFile");
sequelizeFixtures.loadFile("fixtures/initial_seed.json", models).then(function(result) {
	// Confirm that the fixtures load correctly
	console.log("Upload complete: " + JSON.stringify(result));
}).catch(function(error) {
	console.log("ERROR: " + error.stack);
});
console.log("DEBUG: After loadFile");

