$(function () {
    $(".footer_top_btn").on("click", function() {
        $("html, body").animate({
        scrollTop: 0
    }, 500)
    });
});