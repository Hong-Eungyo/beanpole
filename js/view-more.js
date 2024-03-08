$(function () {
    $(".view-more-btn").on("click", function() {
        $(".main_content_center_all .more-content ").css({
            "display" : "grid"
        })
        $(".view-more-btn").css({
            "display":"none"
        })
    })
});