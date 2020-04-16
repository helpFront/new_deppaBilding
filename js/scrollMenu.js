let flagScroll = true;
$('nav #logo').hide();

$(window).scroll(function () { 
    if (window.pageYOffset == 0 && !flagScroll) {
        flagScroll = !flagScroll;
        $('nav').attr('style', 'background-color: transparent');
        $('nav #logo').hide();
        $('header .title').slideDown();
    }else if(window.pageYOffset != 0 && flagScroll){
        flagScroll = !flagScroll;
        $('nav').attr('style', 'background-color: rgba(0, 0, 0)');
        $('nav #logo').show(500);
        $('header .title').slideUp();
    }
});

let target;
function loop(height) {
    if (height < target) {
        return;
    }else{
        setTimeout(() => {
            target += 5;
            window.scrollTo(0,target);
            loop(height);
        }, 1);
    }
}

$(`.tigle`).click(function () { 
    var offset = $(`#tigleTarget`).offset();
    var top = offset.top - 50;
    target = window.pageYOffset;
    loop(top);
});
