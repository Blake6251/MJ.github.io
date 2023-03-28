$(document).ready(function(){
    $("#log_btn").click(function(){
        let toggle = $(".hidden_log").css("display")
        if(toggle == "none"){
            $(".hidden_log").css({"display": "block"})
        }
        else{
            $(".hidden_log").css({"display": "none"})
        }
    })
})