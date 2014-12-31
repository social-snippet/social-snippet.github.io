(function(context) {

	function show(id) {
		$(".how-it-works-body").hide();
		$("#how-it-works-" + id).show();
	}

	$(function() {
		$(document).on("click", "#how-it-works-nav a", function(event) {
			event.preventDefault();
			show($(this).data("show-id"));
			return false;
		});
		show("c");
	})

})(this)
