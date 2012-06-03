$(function() {

	var baseInterval = 3250,
		increment = 250;
	$('.carousel').each(function(index, value) {
		$(this).carousel({
		  interval: baseInterval + (increment * index),
		  pause: "false"
		});
	});

	$('section[id=iOS]').show(function() {

		//Fix the subnav element to top if the original position scrolls out of view
		var $win = $(window)
		  , $nav = $('.subnav')
		  , navTop = $('.subnav').length &&$('.subnav').offset().top - 36
		  , isFixed = 0;

		processScroll()
		$win.on('scroll', processScroll)

		function processScroll() {
		  var i, scrollTop = $win.scrollTop();
		  if (scrollTop >= navTop && !isFixed) {
		    isFixed = 1;
		    $nav.addClass('subnav-fixed');
		  } else if (scrollTop <= navTop && isFixed) {
		    isFixed = 0;
		    $nav.removeClass('subnav-fixed');
		  }
		}
	});

});

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");