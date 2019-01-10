$(function() {
	$(".devour-burger").on("click", function(event) {
    	var id = $(this).data("id");
    	var burgerChange = { devoured: 1 };

    	$.ajax("/api/burger/" + id, {
    		type:"PUT",
    		data: burgerChange
    	}).then(function() {
    		console.log("this is the id", id);
    		location.reload();
    	});
	});
});