$(document).ready(function(){
    $("#log_btn").click(function(){
        let toggle = $(".hidden_log").css("display")
        console.log(toggle)
        if(toggle == "none"){
            $(".hidden_log").css({"display": "block"})
        }
        else{
            $(".hidden_log").css({"display": "none"})
        }
    })
})