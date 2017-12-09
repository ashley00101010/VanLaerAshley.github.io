$(document).ready(function(){
    var fadeInTime = 100;
    var fadeOutTime = 100;
    var popupWindow = $('.contact');

    function fadein(el) {
        $(el).fadeIn(fadeInTime);
    }
    function fadeout(el) {
        $(el).fadeOut(fadeOutTime);
    }

    $('#popup-trigger').on('click touchend', function(){
        fadein(popupWindow);
    })

    $('.popup-close1').on('click touchend', function() {
        fadeout(popupWindow);
    });

})