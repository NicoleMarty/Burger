// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    }
};