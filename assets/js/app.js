/* global smoothScroll */
/*	Smooth scroll */ 
    smoothScroll.init();

/*	Navbar shrink */
    $(window).scroll(function () {
    if ($(document).scrollTop() < 120) {
        $('.navbar').removeClass('tiny');
    } else {
        $('.navbar').addClass('tiny');
    }
    });
      
/*	Close navbar mobile dropdown when clicked */
    // Call jRespond and add breakpoints
    var jRes = jRespond([
        {
            label: 'handheld',
            enter: 0,
            exit: 767
        },{
            label: 'tablet',
            enter: 768,
            exit: 979
        },{
            label: 'laptop',
            enter: 980,
            exit: 1199
        },{
            label: 'desktop',
            enter: 1200,
            exit: 10000
        }
    ]);

    // Register enter and exit functions for a single breakpoint
    jRes.addFunc({
        breakpoint: 'handheld',
        enter: function() {
            $('.navbar-collapse a').click(function(){
                $(".navbar-collapse").collapse('hide');
            });
        }
    });