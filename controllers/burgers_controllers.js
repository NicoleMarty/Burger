var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgers_db = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
/*router.get("/", function(req, res) {
    burgers_db.all(function([burger_name, devoured]) {
        var tableInput = { burger1: [burger_name.data, devoured.data] }

        res.render("index", tableInput);
    });
});*/

router.post("/api/burger", function(req, res) {
    burgers_db.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers_db.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger1.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;