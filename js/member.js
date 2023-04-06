// let m1 = { nickname: "", id: "", password: "", phone: "", email: "" };
let m1 = { nickname: "aaa1!", id: "aaa111", password: "asdqwe1!", phone: "01012345678", email: "aaaa1234@gmail.com" };
let m2 = { nickname: "qwe1!", id: "qweqwe123", password: "qweqwe1!", phone: "01012345678", email: "qwe123@gmail.com" };
let user_info = {nickname : "", id : "", password: "", phone: "", email: ""};
let form = document.getElementById('member');
let nickname = "";
let id = "";
let pw = "";
let phone = "";
let email = "";
let code_num = "";
let num = Math.floor(Math.random() * 899999) + 100000;
let newPass = "";

// 닉네임유효성검사 및 중복검사
function nameChk(){
    nickname = document.getElementById("nickname").value;
    let num = nickname.search(/[0-9]/g); // 입력받은 문자열 숫자확인
    let eng = nickname.search(/[a-z]/ig); // 입력받은 문자열 영어확인
    let spe = nickname.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi); // 입력받은 문자열 특수문자확인
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
    let num = id.search(/[0-9]/g); // 입력받은 문자열 숫자확인
    let eng = id.search(/[a-z]/ig); // 입력받은 문자열 영어확인
    if (id.length < 6 || id.length > 20) {
        alert("6~20자 이내 영문, 숫자를 사용하세요");
        return false;
    } else if (id.search(/\s/g) != -1) {
        alert("공백없이 입력해주세요");
        return false;
    } else if (num < 0 || eng < 0) {
        alert("6~20자 이내 영문, 숫자를 사용하세요");
        return false;
    } else {
        console.log("통과");
        return true;
    }
}
// 아이디 중복여부
function idChk() {
    id = document.getElementById("user_id").value;    
    if (id === m1.id) {
        alert("중복되는 아이디가 있습니다.");  
        return false;
    }else if(id === ''){
        alert("아이디를 입력해주세요.");
        return false;
    }else {
        alert("사용가능한 아이디입니다.");        
        return true;
    }
  
    // console.log(arr.length);
}
// 비밀번호 유효성검사
function pwd_validation() {       
    pw = document.getElementById("user_pwd").value;
    let num = pw.search(/[0-9]/g); // 입력받은 문자열에 숫자확인
    let eng = pw.search(/[a-z]/ig); // 입력받은 문자열에 영어확인
    let spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi); // 입력받은 문자열에 특수문자 확인
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
    let pw = document.getElementById("user_pwd").value;
    let pwchk = document.getElementById("user_pwdChk").value;
    if(pw == '' || pwchk == ''){ 
        alert("비밀번호를 입력해주세요.");
        document.getElementById("user_pwd").focus();
        return false;
    }else if(pw !== pwchk){
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
        phone = document.getElementById("user_phone").value;
    }
}
// 인증번호 6자리 난수 생성함수
function resetCode(){
    code_num = '';
    for(let i = 0; i < 6; i++){
        code_num += Math.floor(Math.random()*10);
    }
}
// 이메일 유효성검사 및 인증번호 발송
function emailChk(){
    resetCode();
    email = document.getElementById("user_email").value;
    let regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(regex.test(email) == false){
        alert("이메일형식이 맞지않습니다.");
        document.getElementById("user_email").focus();
        return false;
    }else{        
        // code_num += num;        
        alert("인증번호를 적어주세요.\n" + "발송된 이메일 : " + email + "\n인증번호 : " + code_num);
        console.log("인증번호 : " + code_num);
        
        return true;
    }
}
/* ~ 회원가입 */
// 인증번호 일치여부
function numChk(){    
    let input_num = document.getElementById("code_num").value;   
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(code_num !== input_num){
        alert("인증번호가 일치하지 않습니다. 다시입력해주세요");
        document.getElementById("code_num").value = null;
        document.getElementById("code_num").focus();        
        return false;
    }else{
        alert("인증이 완료되었습니다.");
        return true;
    }
}

// 동의사항 전체동의 기능
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

function signup(){  
    form.addEventListener('submit', function(event){
        if(!checkConditions()){
            event.preventDefault();
        }
    });
    function checkConditions(){
        user_nickname = document.getElementById('nickname').value;
        user_id = document.getElementById('user_id').value;
        user_pass = document.getElementById('user_pwd').value;
        user_passChk = document.getElementById('user_pwdChk').value;
        user_phone = document.getElementById('user_phone').value;
        user_email = document.getElementById('user_email').value;
        agree1 = document.getElementById('agree_chk1').checked;
        agree2 = document.getElementById('agree_chk2').checked;
        agree3 = document.getElementById('agree_chk3').checked;   

        if(user_nickname === '' || user_id  === '' || user_pass === '' || user_passChk === '' || user_phone === '' || user_email === '' ){
            alert('필수입력사항 입력해주세요.');
            return false;
        }
        if(user_pass !== user_passChk){
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        }
        if(!agree1 || !agree2 || !agree3){
            alert('모두 동의해주세요.');
            return false;
        }   
        user_info = {            
            nickname: user_nickname,
            id: user_id,
            password: user_pass,
            phone: user_phone,
            email: user_email
        };
        sessionStorage.setItem('user', JSON.stringify(user_info));
        
        let user = JSON.parse(sessionStorage.getItem('user'));  

        console.log(user);  

        alert("회원가입에 완료했습니다.");
        location.href = "login.html";
        return true;
    }
}
// 로그인
function login(){
    const loginForm = document.getElementById('login_form');            
    loginForm.addEventListener('submit',function(event){         
        event.preventDefault();
        let user = JSON.parse(sessionStorage.getItem("user"));         
        let id = document.getElementById("user_id").value;
        let pass = document.getElementById('user_pwd').value;                      
        let login = { login_id : "", pass : ""};    /* login 객체 생성 */
        if(id === '' || pass === ''){
            alert('아이디와 비밀번호를 입력해주세요.');
            console.log("m1 : " + JSON.stringify(m1));
            console.log("user : " + JSON.stringify(user));
            return false;
        }else if((id === m1.id && pass === m1.password) || (id === user.id && pass === user.password)){
            alert('로그인 성공');                    
            login = {
                login_id : id,
                login_pass : pass
            }
            sessionStorage.setItem('login', JSON.stringify(login));            
            console.log(JSON.stringify(login.login_id));
            location.href = '../index.html';
            return true;
        }else {
            console.log("m1 : " + JSON.stringify(m1));
            console.log("user : " + JSON.stringify(user));
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');  
            return false;
        }        
    });
}
// 아이디찾기
function findID(){
    const findForm = document.getElementById('form_id');  
    findForm.addEventListener('submit', function(event){
        if(!check()){
            event.preventDefault();        
        }
    });
    function check(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        let email = document.getElementById('user_email').value;
        let num = document.getElementById('code_num').value;

        if(email === '' || num === '') {
            alert('이메일과 인증번호를 입력해주세요.');     
            return false;       
        }
        if(email !== m1.email && email !== user.email){
            alert('이메일이 일치하지않습니다.');
            document.getElementById("code_num").value = null;
            document.getElementById("user_email").focus();
            return false;
        }else if(email === m1.email){            
            alert("아이디 : " + m1.id); 
            return true;           
        }else if(email == user.email){
            alert("아이디 : " + user.id);
            return true;
        }
        
    }
}
//비밀번호 찾기 새 비밀번호 유효성검사
function findPW_validation() {
    pw = document.getElementById("new_pass").value;    
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
function emailChk_pw(){
    resetCode();
    email = document.getElementById("email").value;
    let regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(regex.test(email) == false){
        alert("이메일형식이 맞지않습니다.");
        document.getElementById("email").focus();
        return false;
    }else{               
        alert("인증번호를 적어주세요.\n" + "발송된 이메일 : " + email + "\n인증번호 : " + code_num);
        console.log(code_num);
        return true;
    }
}
function numChk_pw(){    
    let input_num = document.getElementById("code_num_pw").value;   
    let id = document.getElementById("user_id").value;
    if(code_num !== input_num){
        alert("인증번호가 일치하지 않습니다. 다시입력해주세요");
        document.getElementById("code_num_pw").focus(); 
        return false;
    }else{
        alert("인증이 완료되었습니다.");
        return true;
    }
}
//비밀번호 찾기
function findPW(){
    const findForm = document.getElementById('form_pw');            
    findForm.addEventListener('submit', function(event){        
        if(!check()){
            event.preventDefault();        
        }
        function check(){       
            let user = JSON.parse(sessionStorage.getItem('user'));     
            let id = document.getElementById('user_id').value;
            let email = document.getElementById('email').value;
            let num = document.getElementById('code_num_pw').value;
            let new_pass = document.getElementById('new_pass').value;
            let new_repass = document.getElementById('new_repass').value;
            if(id === '' || email === '' || num === '' || new_pass === '' || new_repass === '') {
                alert('입력사항 모두 입력해주세요.');
                return false;       
            }
            if((id !== m1.id || email !== m1.email ) && ( id !== user.id || email !== user.email )){
                alert('아이디 또는 이메일이 일치하지않습니다.');
                document.getElementById("code_num_pw").value = null;
                document.getElementById('user_id').focus();
                return false;                
            }else if(id === m1.id || email === m1.email){
                m1.password = new_repass;   
                alert("변경된 비밀번호 : " + m1.password);      
                return true;
            }else if(id === user.id || email === user.email ){
                user.password = new_repass;
                sessionStorage.setItem('user', JSON.stringify(user));
                alert("변경된 비밀번호 : " + user.password);
                return true;
            }
            
            if(new_pass !== new_repass){
                alert('비밀번호가 일치하지 않습니다.');
                document.getElementById("new_repass").value = null;
                document.getElementById('new_repass').focus();
                return false;
            }          
        }
    });
}
