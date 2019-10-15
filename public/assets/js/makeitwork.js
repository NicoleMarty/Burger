Handlebars.registerPartial("burger", $("#burger-partial").html());

$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated devoured list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger_Name = {
            burger_name: $("#burger_name").val().trim(),
            devoured: $("[burger_name=devoured]:checked").val().trim()
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