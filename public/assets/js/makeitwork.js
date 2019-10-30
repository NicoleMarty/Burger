$(function() {
    $(".change-devoured").on("click", function(event) {
        event.preventDefault();

        var newDevoured = {
            burger_name: $("#burger_name").val(),
            devoured: 1
        };
        var condition = "id = " + req.params.id;
        // Send the PUT request
        $.ajax("/api/burger/" + condition, {
            type: "PUT",
            data: newDevoured
        }).then(
            function() {
                console.log("changed devoured");
                // Reload the page to get the updated devoured list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger_Name = {
            burger_name: $("#burger_name").val(),
            devoured: 0
        };

        // Send the POST request
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger_Name
        }).then(
            function() {
                console.log("created new burger name");
                // Reload the page to get updated burger name list
                location.reload();
            }
        );
    });
});