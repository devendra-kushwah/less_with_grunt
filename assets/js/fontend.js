
$(document).ready(function(){

   
    $('.secondary-navbar li').on('click', function(){
        //var tabBanner = $('.tab-banners li').length;
        var tabindex = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        //$(this).parents(".secondary-navbar").siblings('.tab-banners').find('li').eq(tabindex).addClass("active");
        $('.tab-banners li').eq(tabindex).addClass("active");
        $('.tab-banners li').eq(tabindex).siblings().removeClass("active");
        $('.main-wrapper .tab-content').eq(tabindex).addClass("active");
        $('.main-wrapper .tab-content').eq(tabindex).siblings().removeClass("active");

    })
  })

$(window).resize(function() {
    var sliderImageHeight = $('.tab-image').height();
    $('.tab-banners').css("height", sliderImageHeight);
});
$(window).trigger('resize');