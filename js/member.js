let m1 = { nickname: "aaa1!", id: "aaa111", password: "asdqwe123!@#", phone: "01012345678", email: "aaaa1234@gmail.com" }
let m2 = { nickname: "qwe00!", id: "qweqwe123", password: "qweqwe123!", phone: "01012345678", email: "qweqwe123@gmail.com" }
let user_info = { nickname: "", id: "", password: "", phone: "", email: "" };
let nickname = "";
let id = "";
let pw = "";
let phone = "";
let email = "";
let code_num = "";
let num = Math.floor(Math.random() * 899999) + 100000;
// 닉네임유효성검사 및 중복검사
function nameChk(){
    nickname = document.getElementById("nickname").value;
    let num = nickname.search(/[0-9]/g);
    let eng = nickname.search(/[a-z]/ig);
    let spe = nickname.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if(nickname.length < 2  || nickname.length > 10){
        alert("2~10자 이내 영문, 숫자, 특수문자를 사용하세요.");    
        document.getElementById("nickname").focus();
        return false;
    }else if(num < 0 || eng < 0 || spe < 0){
        alert("2~10자 이내 영문, 숫자, 특수문자를 사용하세요.");    
        document.getElementById("nickname").focus();
        return false;
    }else if(nickname.search(/\s/g) !== -1){
        alert("공백없이 입력해주세요");
        document.getElementById("nickname").focus();
        return false;
    }else if(nickname == m1.nickname){
        alert("중복된 닉네임입니다.");
        document.getElementById("nickname").focus();
        return false;
    }else {
        alert("사용가능한 닉네임입니다.");
        return true;
    }
}
// 아이디 유효성검사
function id_validation(){
    id = document.getElementById("user_id").value;
    let num = id.search(/[0-9]/g);
    let eng = id.search(/[a-z]/ig);
    if (id.length < 6 || id.length > 20) {
        alert("6~20자 이내 영문, 숫자를 사용하세요");
        return false;
    } else if (id.search(/\s/g) != -1) {
        alert("공백없이 입력해주세요");
        return false;
    } else if (num < 0 || eng < 0) {
        alert("6~20자 이내 영문, 숫자를 사용하세요");
        // document.getElementById("user_id").focus();
        return false;
    } else {
        console.log("통과");
        return true;
    }
}
// 아이디 중복여부
function idChk() {
    id = document.getElementById("user_id").value;    
    if (id == m1.id) {
        alert("중복되는 아이디가 있습니다.");        
        return false;
    } else {
        alert("사용가능한 아이디입니다.");        
        return true;
    }
  
    // console.log(arr.length);
}
// 비밀번호 유효성검사
function pwd_validation() {
    pw = document.getElementById("user_pwd").value;    
    let num = pw.search(/[0-9]/g);
    let eng = pw.search(/[a-z]/ig);
    let spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if((pw.length < 8  || pw.length > 16) || num < 0 || eng < 0 || spe < 0){
        alert("8~16이내 영문, 숫자, 특수문자를 사용하세요.");    
        return false;
    }else if(pw.search(/\s/) != -1){
        alert("비밀번호는 공백없이 입력해주세요.");
        return false;
    }else{        
        console.log("통과");
        return true;
    }
    
}
// 비밀번호 일치여부
function pwdChk() {
    pw = document.getElementById("user_pwd").value;
    let pwchk = document.getElementById("user_pwdChk").value;
    if(pw !== pwchk){
        alert("비밀번호가 일치하지않습니다.");
        document.getElementById("user_pwdChk").value = null;
        document.getElementById("user_pwdChk").focus();
        return false;
    }else{
        alert("비밀번호가 일치합니다.");
        console.log("통과");
        return true;
    }    
}
// 휴대폰번호 유효성검사
function phoneChk(){
    phone = document.getElementById("user_phone").value;
    if (phone == null || phone == "" || phone.length !== 11) {
        alert("다시 입력해주세요");
        document.getElementById("user_phone").value = null;
        document.getElementById("user_phone").focus();
    } else {
        alert("숫자");
        user_info.phone = document.getElementById("user_phone").value;
        // document.getElementById("user_phone").focus();
    }
}
// 이메일 유효성검사 및 인증번호 발송
function emailChk(){
    email = document.getElementById("user_email").value;
    // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(regex.test(email) == false){
        alert("이메일형식이 맞지않습니다.");
        document.getElementById("user_email").focus();
        return false;
    }else{
        // num = Math.floor(Math.random() * 899999) + 100000;
        // code_num = num;
        code_num += num;
        alert("인증번호를 적어주세요.\n" + "발송된 이메일 : " + email + "\n인증번호 : " + num);
        console.log(regex.test(email));
        return true;
    }
}
// 인증번호 일치여부
function numChk(){    
    let input_num = document.getElementById("code_num").value;    
    if(code_num !== input_num){
        alert("인증번호가 일치하지 않습니다. 다시입력해주세요");
        document.getElementById("code_num").focus();
        return false;
    }else{
        alert("인증이 완료되었습니다.");
        return true;
    }
}
// 동의사항 체크여부
function agree_chkAll() {
    $(document).ready(function () {
        $("#agree_allchk").click(function () {
            if ($("#agree_allchk").is(":checked")) {
                $("input[name=chk]").prop("checked", true);
            }
            else {
                $("input[name=chk]").prop("checked", false);
            }            
        });
        $("input[name=chk]").click(function () {
            let total = $("input[name=chk]").length;
            let checked = $("input[name=chk]:checked").length;

            if (total != checked) {
                $("#agree_allchk").prop("checked", false);
            } else {
                $("#agree_allchk").prop("checked", true);
            }
        });
    });
}
function handleSubmit() {
    //회원정보
    nickname = document.getElementById('nickname').value;
    id = document.getElementById('user_id').value;
    password = document.getElementById('user_pwd').value;
    phone = document.getElementById('user_phone').value;
    email = document.getElementById('user_email').value;
    let pass = false;
    // 로컬 스토리지에 회원정보 저장
    // let user_nickname = user_info.setItem("nickname", nickname);
    // let user_id = localStorage.setItem("id", id);
    // let user_password = localStorage.setItem("password", password);
    // let user_phone;
    // let user_phone = localStorage.setItem("phone", phone);
    // let user_email = localStorage.setItem("email", email); 

    user_info.nickname = nickname;
    user_info.id = id
    user_info.password = password;
    user_info.phone = "";
    user_info.email = email;

    agree_chkAll();

    if (user_info.phone == null || user_info.phone == "undefined" || user_info.phone == "") {
        console.log("빈칸");
        return false;
    } else {
        console.log("닉네임 : ", user_info.nickname);
        console.log("아이디 : ", user_info.id);
        console.log("비밀번호 : ", user_info.password);
        console.log("휴대폰 : ", user_info.phone);
        console.log("이메일 : ", user_info.email);
        return true;
    }




    // window.location.href = "login.html";
    // 값을 확인하거나 처리하는 코드를 작성합니다.
    // console.log("닉네임 : ",localStorage.getItem("nickname"));
    // console.log("아이디 : ",localStorage.getItem("id"));
    // console.log("비밀번호 : ",localStorage.getItem("password"));
    // console.log("휴대폰 : ", localStorage.getItem("phone"));
    // console.log("이메일 : ", localStorage.getItem("email")); 
    // console.log(isNaN(phone));          
}
