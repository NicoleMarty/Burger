$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevoured")

        var newDevouredState = {
            devoured: 1
        };

        // Send the PUT request
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newdevoured);
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