// 검색창 스크립트
$("#filter_btn").click(function(){ // 검색 필터 버튼
    $(".search_section").css({"display":"block"})
})

$("#close_btn").click(function(){ // 검색 필터창 닫기 버튼
    $(".search_section").css({"display":"none"})
})

/* 검색 버튼 */
let loc_chk_arr = []    // 체크된 지역 담길 배열
let theme_chk_arr = []  // 체크된 테마 담길 배열
$("#search_btn").click(function(){
    let search = $("#search").val()
    let loc_str = loc_chk_arr.join(",")
    let theme_str = theme_chk_arr.join(",")
    location.href = `../html/restaurant_list.html?search=${search}&loc=${loc_str}&theme=${theme_str}`
})
// 지역별 필터 확인
$(".check_btn_loc").click(function(){
    let check_value = $(this).attr("value")
    let this_btn = $(this)

    if(check_value == "false"){
        $(this).css({"border":"1px solid #f76e11","background-color":"#fff","color":"#f76e11"})
        $(this).attr("value", "true")
        loc_chk_arr.push($(this).attr("name"))
        loc_chk_arr.sort()
    }
    else{
        $(this).css({"border":"1px solid #fff","background-color":"#f76e11","color":"#fff"})
        $(this).attr("value", "false")
        loc_chk_arr = jQuery.grep(loc_chk_arr, function(item){
            return item != this_btn.attr("name")
        })
    }
    console.log(loc_chk_arr)
})
// 테마별 필터 확인
$(".check_btn_theme").click(function(){
    let check_value = $(this).attr("value")
    let this_btn = $(this)

    if(check_value == "false"){
        $(this).css({"border":"1px solid #f76e11","background-color":"#fff","color":"#f76e11"})
        $(this).attr("value", "true")
        theme_chk_arr.push($(this).attr("name"))
        theme_chk_arr.sort()
    }
    else{
        $(this).css({"border":"1px solid #fff","background-color":"#f76e11","color":"#fff"})
        $(this).attr("value", "false")
        theme_chk_arr = jQuery.grep(theme_chk_arr, function(item){
            return item != this_btn.attr("name")
        })
    }
    console.log(theme_chk_arr)
})