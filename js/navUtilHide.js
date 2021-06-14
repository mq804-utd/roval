const backdrop = '#backdrop'
const currentWidth = window.innerWidth
const mobileMaxWidth = 425
const tabletMaxWidth = 1024
const desktopDistance = 40 //desktop move menu
const mobileDistance = 32 //mobile move menu
const tabletDistance = 32 //tablet move menu
const moveDistance = (currentWidth <= tabletMaxWidth)
    ? (currentWidth <= mobileMaxWidth)
        ? mobileDistance
        : tabletDistance
    : desktopDistance

$(window).scroll(function() {
    if ($(this).scrollTop() > moveDistance) {
        $('#navigation-utility').css({
            'top': '-' + moveDistance +'px',
        });
        $('#navigation-main').css({
            'top': '0px',
        });
        if (mobileDistance === tabletDistance)
            $(backdrop)[0].style.top = '56px'
    }
    if ($(this).scrollTop() < 40) {
        $('#navigation-utility').css({
           'top': '0'
        });
        $('#navigation-main').css({
            'top': moveDistance + 'px',
        });
        if (mobileDistance === tabletDistance)
            $(backdrop)[0].style.top = '88px'
    }
});