// 기본 이벤트 제거
window.addEventListener("wheel", function(e) {
    e.preventDefault();
}, {passive : false});

// 참조하는 요소 미리 탐색 및 선언
var $html = $("html");
var page = 1;
var lastPage = $(".content-wrap").length;

// 문서가 로드되면 첫 페이지 시작
$html.animate({scrollTop: 0}, 10);

$(window).on("wheel", function(e) {

    if($html.is(":animated")) return;

    if(e.originalEvent.deltaY > 0) {
        if(page == lastPage) return;
        page++;
    } else if (e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }

    var posTop = (page-1) * $(window).height();

    $html.animate({scrollTop : posTop}, 1000);

})

$(window).resize(function() {
    
})