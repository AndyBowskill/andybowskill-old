$(function() {

	var baseInterval = 3250,
		increment = 250;
	$('.carousel').each(function(index, value) {
		$(this).carousel({
		  interval: baseInterval + (increment * index),
		  pause: "false"
		});
	});

});