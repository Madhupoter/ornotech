(function($) {
    'use strict';

    if ($("#header").length > 0) {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >100) {
                $(".header").css("position", "fixed");
                $(".header").css("margin", "0px");
                $(".header").css("background", "#fff");
                $(".nav-brand").css("width", "250px");
                $(".top-nav").css("display", "none");
                
            } else {
                $(".header").css("position", "relative");
                $(".header").css("margin", "20px 0");
                $(".header").css("background", "#fff");
                $(".nav-brand").css("width", "339px");
                $(".top-nav").css("display", "flex");
            }
        });
    }
})(jQuery);



var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
    elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
}

;