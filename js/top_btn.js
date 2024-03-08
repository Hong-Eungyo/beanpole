$(document).ready(function() {
    var $dashOffset = $(".moving-circle").css("stroke-dashoffset");
    $(window).scroll(function() {
        //유저가 얼만큼 페이지를 내렸는지 계산
        var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 30);
        //dashoffset 픽셀값을 정수로 계산
        var $newUnit = parseInt($dashOffset, 10);
        //'stroke-dashoffset'에서 뺼 값
        var $offsetUnit = $percentageComplete * ($newUnit / 100);
        $(".moving-circle").css("stroke-dashoffset", $newUnit - $offsetUnit);
    });
    $(".top_btn").on("click", function() {
        $("html, body").animate({
        scrollTop: 0
    }, 500)
    });
    $(window).scroll(function() {
        const footerTop = $("footer").offset().top;
        const heights = footerTop - window.innerHeight;
        console.log (heights);
        if (window.scrollY > heights) {
            $(".top_btn").addClass("btn_fixed");
        } else {
            $(".top_btn").removeClass("btn_fixed");
        }
    })

});

