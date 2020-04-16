const width = $(window).width();

if (width < 900) {
    document.querySelector('.contact__ask').remove();
}

if (width < 800) {
    document.querySelector('#logo').remove();
}

if (width < 350) {
    $('.nav__menu p').hide();
    document.querySelector('.info__btn').innerHTML = 'Бесплатная консультация';
}

const padd = $('nav').height();

if (width < 500 ) {
    $('.title').attr('style', `padding-top:${padd}px`);
}else if (width < 850 ) {
    $('.title').attr('style', `padding-top:${padd+30}px`);
}else{
    $('.title').attr('style', `padding-top:${padd+80}px`); 
}

