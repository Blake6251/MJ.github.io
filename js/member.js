function agree_chkAll(){
    $(document).ready(function() {
        $("#agree_allchk").click(function() {
            if($("#agree_allchk").is(":checked")) {
                $("input[name=chk]").prop("checked", true);
            }
            else{
                $("input[name=chk]").prop("checked", false);
            }
        });
        
        $("input[name=chk]").click(function() {
            let total = $("input[name=chk]").length; 
            let checked = $("input[name=chk]:checked").length;
            
            if(total != checked){
                $("#agree_allchk").prop("checked", false);
            }else{
                $("#agree_allchk").prop("checked", true); 
            }
        });
    });
}
