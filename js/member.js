// let m1 = { nickname: "", id: "", password: "", phone: "", email: "" };
let m1 = { nickname: "aaa1!", id: "aaa111", password: "asdqwe1!", phone: "01012345678", email: "aaaa1234@gmail.com" };
let m2 = { nickname: "qwe1!", id: "qweqwe123", password: "qweqwe1!", phone: "01012345678", email: "qwe123@gmail.com" };
let user_info = {nickname : "", id : "", password: "", phone: "", email: ""};
let form1 = document.getElementById('member');
let nickname = "";
let id = "";
let pw = "";
let phone = "";
let email = "";
let code_num = "";
let num = Math.floor(Math.random() * 899999) + 100000;
let newPass = "";
// m1.password = newPass;
// sessionStorage.setItem('newPassword', newPass);

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
    if (id === m1.id) {
        alert("중복되는 아이디가 있습니다.");  
        console.log(id);
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
        // alert("숫자");
        phone = document.getElementById("user_phone").value;
        // document.getElementById("user_phone").focus();
    }
}
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
    // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let user = JSON.parse(sessionStorage.getItem('user'));
    let regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(regex.test(email) == false){
        alert("이메일형식이 맞지않습니다.");
        document.getElementById("user_email").focus();
        return false;
    }else{        
        // code_num += num;        
        alert("인증번호를 적어주세요.\n" + "발송된 이메일 : " + email + "\n인증번호 : " + code_num);
        console.log(code_num);
        console.log(regex.test(email));
        console.log("입력 : " + email);
        console.log("저장 : " + user.email);
        
        return true;
    }
}
function emailChk_pw(){
    resetCode();
    email = document.getElementById("email").value;
    // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(regex.test(email) == false){
        alert("이메일형식이 맞지않습니다.");
        document.getElementById("email").focus();
        return false;
    }else{        
        // code_num += num;        
        alert("인증번호를 적어주세요.\n" + "발송된 이메일 : " + email + "\n인증번호 : " + code_num);
        console.log(code_num);
        console.log(regex.test(email));
        return true;
    }
}
// 인증번호 일치여부
function numChk(){    
    let input_num = document.getElementById("code_num").value;    
    let user = JSON.parse(sessionStorage.getItem('user'));
    email = document.getElementById("email").value;
    if(code_num !== input_num){
        alert("인증번호가 일치하지 않습니다. 다시입력해주세요");
        document.getElementById("code_num").value = null;
        document.getElementById("code_num").focus();        
        return false;
    }else{
        alert("인증이 완료되었습니다.");
        console.log("입력 : " + email);
        console.log("저장 : " + user.email);
        return true;
    }
}
function numChk_pw(){    
    let input_num = document.getElementById("code_num_pw").value;   
    // code_num = '';
    // for(let i = 0; i < 6; i++){
    //     code_num += Math.floor(Math.random()*10);
    // } 
    if(code_num !== input_num){
        alert("인증번호가 일치하지 않습니다. 다시입력해주세요");
        document.getElementById("code_num_pw").focus(); 
        console.log("입력 값 : " + input_num);
        console.log("인증번호 : " + code_num);     
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
// 아이디찾기
function findID(){
    const findForm = document.getElementById('form_id');  
    findForm.addEventListener('submit', function(event){
        if(!check()){
            event.preventDefault();        
        }
    });
    function check(){         
        // if(signUp_info !== null){
        //     signUp_info();
        // }
        // let id = document.getElementById('user_id').value;
        let user = JSON.parse(sessionStorage.getItem('user'));
        let email = document.getElementById('user_email').value;
        let num = document.getElementById('code_num').value;

        if(email === '' || num === '') {
            alert('이메일과 인증번호를 입력해주세요.'); 
            console.log("입력 : " + email);
            console.log("저장 : " + user.email);       
            console.log(JSON.stringify(m1));
            console.log(JSON.stringify(user));        
            return false;       
        }
        if(email !== m1.email){
            alert('이메일이 일치하지않습니다.');
            document.getElementById("user_email").value = null;
            document.getElementById("code_num").value = null;
            document.getElementById("user_email").focus();
            return false;
        }else if(email === m1.email){            
            alert("아이디 : " + m1.id); 
            return true;           
        }
        if(user !== null){
            if(email !== user.email){
                alert('이메일이 일치하지않습니다.');
                console.log("입력 : " + email);
                console.log("저장 : " + user.email);
                document.getElementById("user_email").value = null;
                document.getElementById("code_num").value = null;
                document.getElementById("user_email").focus();                
                return false;
            }else if(email === user.email){
                alert("아이디 : " + user.id);
            }
        }
        
           
        //else if(id === '' || email === '' || num === ''){
        //     alert('입력사항 모두 입력해주세요.')
        //     return false;
        //}        
        // location.href = "login.html";
        
    }
}
// 비밀번호 찾기 시 임시비밀번호 생성

// function generatePass(){    
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
//     let password = '';    

//     for (let i = 0; i < 8; i++) {
//         password += characters.charAt(Math.floor(Math.random() * characters.length));                            
//     }   
//     return password; 
// }

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
// function signUp_info(){
//     let user_info = { 
//         // nickname: document.getElementById("nickname").value, 
//         // id: document.getElementById('user_id').value, 
//         // password: document.getElementById("user_pwd").value,
//         // phone: document.getElementById("user_phone").value,
//         // email: document.getElementById('user_email').value
//         nickname: "",
//         id: "",
//         password: "",
//         phone: "",
//         email: ""
//     };    
// }
function update_info(){
    user_info.password = document.getElementById("new_repass").value;    
}
//비밀번호 찾기
function findPW(){
    const findForm = document.getElementById('form_pw');            
    findForm.addEventListener('submit', function(event){ 
        update_info();
        if(!check()){
            event.preventDefault();        
        }
        function check(){            
            let id = document.getElementById('user_id').value;
            let email = document.getElementById('email').value;
            let num = document.getElementById('code_num_pw').value;
            let new_pass = document.getElementById('new_pass').value;
            let new_repass = document.getElementById('new_repass').value;
            if(id === '' || email === '' || num === '' || new_pass === '' || new_repass === '') {
                alert('입력사항 모두 입력해주세요.');                           
                return false;       
            }else if(id !== m1.id || email !== m1.email){
                alert('아이디 또는 이메일이 일치하지않습니다.');
                document.getElementById("code_num_pw").value = null;
                document.getElementById('user_id').focus();
                return false;
            }else if(new_pass !== new_repass){
                alert('비밀번호가 일치하지 않습니다.');
                document.getElementById("new_repass").value = null;
                document.getElementById('new_repass').focus();
                return false;
            }
            // m1.password = ""
            // newPass = new_repass;
            // m1.password += newPass;
            alert("변경된 비밀번호 : " + user_info.password);
            console.log(user_info.password);           
            return true;             
        }
    });
}
// m1.password = newPass;
// 체크박스가 모두 선택되었는지 확인하는 함수
function agreeChk(){
    let agree1 = document.getElementById("agree_chk1");
    let agree2 = document.getElementById("agree_chk2");
    let agree3 = document.getElementById("agree_chk3");

    if(!agree1.checked || !agree2.checked || !agree3.checked){
        alert("동의사항에 모두 동의해주세요.");        
        return false;
    }else{        
        return;
    }    
}

function signup(){  
    form1.addEventListener('submit', function(event){
        if(!checkConditions()){
            event.preventDefault();
        }
    });
    function checkConditions(){
        const form = document.getElementById('member');
        user_nickname = document.getElementById('nickname').value;
        user_id = document.getElementById('user_id').value;
        user_pass = document.getElementById('user_pwd').value;
        user_passChk = document.getElementById('user_pwdChk').value;
        user_phone = document.getElementById('user_phone').value;
        user_email = document.getElementById('user_email').value;
        agree1 = document.getElementById('agree_chk1').checked;
        agree2 = document.getElementById('agree_chk2').checked;
        agree3 = document.getElementById('agree_chk3').checked;        

        // const nickname = document.getElementById('nickname').value;
        // const id = document.getElementById('user_id').value;
        // const pass = document.getElementById('user_pwd').value;
        // const passChk = document.getElementById('user_pwdChk').value;
        // const phone = document.getElementById('user_phone').value;
        // const email = document.getElementById('user_email').value;
        // const agree1 = document.getElementById('agree_chk1').checked;
        // const agree2 = document.getElementById('agree_chk2').checked;
        // const agree3 = document.getElementById('agree_chk3').checked;
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
        
        // form.addEventListener('submit',function(event){
        //     event.preventDefault();

        //     const userinfo = {
        //         nickname : document.getElementById('nickname').value,
        //         user_id : document.getElementById('user_id').value,
        //         user_pwd : document.getElementById('user_pwd').value,
        //         user_phone : document.getElementById('user_phone').value,
        //         user_email : document.getElementById('user_email').value
        //     }
        //     sessionStorage.setItem('userinfo', JSON.stringify(userinfo));
        // });       
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
function login(){
    const loginForm = document.getElementById('login_form');    
    // const loginbtn = document.querySelector('#login');
    // loginbtn.addEventListener('click', (e) => {
    //     e.preventDefault();

    //     const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));

    //     form.user_id.value = userinfo.id;
    //     form.user_pass.value = userinfo.password;
    // });
    loginForm.addEventListener('submit',function(event){         
        event.preventDefault();
        let user = JSON.parse(sessionStorage.getItem("user"));         
        let id = document.getElementById("user_id").value;
        let pass = document.getElementById('user_pwd').value;                      
        
        if(id === '' || pass === ''){
            alert('아이디와 비밀번호를 입력해주세요.');
            console.log("m1 : " + JSON.stringify(m1));
            console.log("user : " + JSON.stringify(user));
            return false;
        }else if(id === m1.id && pass === m1.password){
            alert('로그인 성공');
            console.log("입력한 아이디 : " + id);
            console.log("입력한 비밀번호 : " + pass);
            console.log("저장된 아이디(m1) : " + m1.id);
            console.log("저장된 비밀번호(m1) : " + m1.password);
            // document.cookie = "user_id=${m1.id}";
            console.log("m1 : " + JSON.stringify(m1));
            window.location.href = '../index.html';
        }else {
            console.log("m1 : " + JSON.stringify(m1));
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');  
        }        
        if(user !== null){
            if(id === user.id && pass === user.password){
                alert('로그인 성공');
                console.log("입력한 아이디 : " + id);
                console.log("입력한 비밀번호 : " + pass);
                console.log("저장된 아이디(user) : " + user.id);
                console.log("저장된 비밀번호(user) : " + user.password);
                console.log("user : " + JSON.stringify(user));
                window.location.href = '../index.html';
            }else{
                console.log("m1 : " + JSON.stringify(m1));
                console.log("user : " + JSON.stringify(user));
                alert('아이디 또는 비밀번호가 일치하지 않습니다.');            
            }
        }
    });    
    // const userinfo = JSON.parse(localStorage.getItem('userinfo'));
    // const user_id = document.getElementById("user_id").value;
    // const user_pwd = document.getElementById('user_pwd').value;

    // const user = users.find(user => user.user_id === user_id && user.user_pass === user_pwd);

    // if(userinfo){
    //     console.log(localStorage.getItem('userinfo'));
    //     alert("로그인 성공!");

    //     localStorage.setItem("currentUser". JSON.stringify(userinfo));

    //     location.href = "../index.html";
    //     return false;
    // }else {
    //     alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    //     console.log(localStorage.getItem('userinfo'));
    //     return false;
    // }
}
function checkLoginStatus(){
    const cookies = document.cookie.split("; ");
    for(const cookie of cookies){
        const [name, value] = cookie.split("=");
        if(name == "user_id"){
            const userid = value;
        }
    }
}

