$(function(){
    //헤더
    var screenWidth = $(window).width();

    if (screenWidth <= 767) {
        $('.header .gnb li a').click(function() {
            $('.header .menu_wrap').hide();
        });
        $('.header .bg').click(function() {
            $('.header .menu_wrap').hide();
        });
    }
    
    $('.header .menu_open').click(function() {
        $('.header .menu_wrap').addClass('on');
    });
    $('.header .menu_close').click(function() {
        $('.header .menu_wrap').removeClass('on');
    });

    $('.popup_wrap .btn_close').click(function() {
        $('.popup_wrap').hide();
    });
});
