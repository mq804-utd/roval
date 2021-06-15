const classHeader = 'header'
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
        $(classHeader).css({
            'transform': 'translateY(-' + moveDistance +'px',
        });
    }
    if ($(this).scrollTop() < 40) {
        $(classHeader).css({
            'transform': 'translateY(' + 0 +'px',
        });
    }
});