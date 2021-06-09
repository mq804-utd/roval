$(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
        $('#navigation-utility').css({
            'top': '-40px',
        });
        $('#navigation-main').css({
            'top': '0px',
        });
    }
    if ($(this).scrollTop() < 40) {
        $('#navigation-utility').css({
            'top': '0'
        });
        $('#navigation-main').css({
            'top': '40px',
        });
    }
});