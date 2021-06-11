$(window).scroll(function() {
    const menuToggle = document.getElementById('menuToggle__checkbox')
    if (!menuToggle.checked) {
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
    }
});