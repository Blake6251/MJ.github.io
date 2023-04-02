function test(){
    const kakaoLogin = new kakao.LoginWithKakaoId(
    {
    clientId: "	e9dff5feb5cb34020412f0da014b1dc4",
    loginButton: {color: "green", type: 2, height: 40}
    }
    );     
    kakaoLogin.init();
    kakaoLogin.getLoginStatus(function (status) {
        if (status) {
            const nickName=kakaoLogin.user.getNickName();
            const age=kakaoLogin.user.getAge();
            const birthday=kakaoLogin.user.getBirthday();

            if(nickName===null||nickName===undefined ){
            alert("별명이 필요합니다. 정보제공을 동의해주세요.");
            kakaoLogin.reprompt();
            return ;  
        }else{
            setLoginStatus();
        }
    }
    });
    console.log(kakaoLogin);

    function setLoginStatus(){

    const message_area=document.getElementById('message');
    message_area.innerHTML=`
    <h3> Login 성공 </h3>
    <div>user Nickname : ${kakaoLogin.user.nickname}</div>
    <div>user Age(범위) : ${kakaoLogin.user.age}</div>
    <div>user Birthday : ${kakaoLogin.user.birthday}</div>
    `;

    const button_area=document.getElementById('button_area');
    button_area.innerHTML="<button id='btn_logout'>로그아웃</button>";

    const logout=document.getElementById('btn_logout');
    logout.addEventListener('click',(e)=>{
        kakaoLogin.logout();
    location.replace("http://localhost:8080/navertest.html");
    })
    }
}