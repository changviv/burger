$(function() {
	$(".devour-burger").on("click", function(event) {
    	var id = $(this).data("id");
    	var burgerChange = { devoured: 1 };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type:"PUT",
            data: burgerChange
        }).then(function() {
            location.reload();
        });
    });

	$(".create-form").on("submit", function(event) {
    	event.preventDefault();

    	burgerName = $("#burgerInput").val().trim();

    	if (burgerName === "") {
    		alert("Please add a burger")
    	} else {
    		// Send the POST request.
    		$.ajax("/api/burger", {
    		  type: "POST",
    		  data: { burger_name: burgerName },
    		}).then(function() {
    		    // Reload the page to get the updated list
    		    location.reload();
    		});
    	};

    	
  	});
});