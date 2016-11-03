/*Navbar links active on scroll*/

jQuery(window).scroll(function(){

    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top - 100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){

            $('a.active').removeClass('active');
            $('a[href*="#'+id+'"]').addClass('active');
        }
        var $second = $('section:eq(1)');
        var elTop = $second.offset().top;
        /*Solid navbar on scroll*/
        $('.navbar').css({"background-color": "#6bcb6b", "opacity": "1"});

    });

    $('.navbar ul').addClass('navActive');

});

/*Navbar links smoothly scrolling to sections*/
$("#menu").on("click",'a[href^="#"]', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top - 60}, 1000);

});

$("#scroll").on("click",'a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 60}, 1000);

});

/*initializing swipers*/
$(function() {
    var swiper1 = new Swiper('.s1', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        slidesPerGroup: 4,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,

        // Responsive breakpoints
        breakpoints: {
            560: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            1200: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetweenSlides: 20
            }
        }
    });

    var swiper2 = new Swiper('.s2', {
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        paginationClickable: true,
        loop: true

    });


});

/*Forms styling on focus/blur*/
jQuery(document).ready(function() {
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('navActive');
        $('.navbar ul').toggleClass('navActive');

        e.preventDefault();
    });
    $('input').on('focus', function(){
        if(!$(this).data('placeholder')){
            $(this).data('placeholder', $(this).attr('placeholder'));
        }
        $(this).attr('placeholder', "");
        $(this).css('border', '1px solid #c0301c');
    }).on('blur', function(){
        if($(this).val()==""){
            $(this).attr('placeholder', $(this).data('placeholder'));
            $(this).css("border", "1px solid #555");
        }
    });
    $('textarea').on('focus', function(){
        if(!$(this).data('placeholder')){
            $(this).data('placeholder', $(this).attr('placeholder'));

        }
        $(this).attr('placeholder', "");
        $(this).css("border", "1px solid #c0301c");
    }).on('blur', function(){
        if($(this).val()==""){
            $(this).attr('placeholder', $(this).data('placeholder'));
            $(this).css("border", "1px solid #555");
        }
    });

});

