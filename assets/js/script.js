// nav_menu
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

// Smooth Scroll
$(function(){
    $('a[href^="#"]').click(function() {
        var speed = 400; //ここはお好きな数値に変えてください
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// swiper controll
$(function(){
    var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
    });
});