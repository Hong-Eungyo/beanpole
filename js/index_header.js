$(function () {
    var hdOffset = $(".header-wrap").offset();
   $(window).scroll(function() {
    var textColor = $(".main-menu > ul > li > a");
    if ( $( document ).scrollTop() > hdOffset.top ) {
        $('.header-wrap').addClass('header_fixed');
        $("#logo_black").removeClass('logohide');
      }
      else {
        $('.header-wrap').removeClass('header_fixed');
        $("#logo_black").addClass('logohide');
      }
   })
   
}); 

$(function() {
    $('.main-menu>ul>li').hover(function(){
        $(this).addClass('on');
        $(this).parent().addClass('hover');
    },function(){
        $(this).removeClass('on');
        $(this).parent().removeClass('hover');
    });
    $('.main-menu>ul>li>ul>li').hover(function(){
        $(this).addClass('on');
    },function(){
        $(this).removeClass('on');
    });
    $('.main-menu>ul>li').mouseenter(function(){
        $('header').addClass('header_on');
    });
    $('header').mouseleave(function(){
        $('header').removeClass('header_on');
    });
});
