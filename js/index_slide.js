$(function () {
$slide_all = $(".slide_all_wrap");
$slide_all_list = $(".slide_all_wrap .slide_box");
$dot_all = $(".dot_all");
$dot_all_list = $(".dot_all > div");


function var_set() {
    slide_width = $(".slide_box").width();
    index_now = $(".dot_all > div.open").index();
    dot_count = $dot_all_list.length;
}

// 인디케이터 클릭 시
function dot_click() {
    $(".dot_all > div").on("click", function() {
        index_now = $(this).index();
        slide_move();
    })
}

// Slide move
function slide_move() {
    $slide_all.animate({
        left: -(slide_width * index_now)
    }, 2000, "swing")
    $dot_all_list.removeClass("open");
    $dot_all_list.eq(index_now).addClass("open");  
}

//prev 버튼 - 2 
$(".prev").on("click", function() {
    prev_move();
})

// prev_move
function prev_move() {
    if(index_now == 0) {
        index_now = dot_count -1;
    } else {
        index_now--;
    }
    slide_move();
}

//next 버튼 - 2 
$(".next").on("click", function() {
    next_move();
})

//next_move
function next_move() {  
    if(index_now == dot_count -1) {
        index_now = 0;
    }else {
        index_now++;
    }
    slide_move();
}

// 윈도우 사이즈 변경
$(window).resize(function () {

    var_set();

})

function start_timer () {
    timer = setInterval(next_move, 6000);
}




var_set();
dot_click();
start_timer();
});