	function test(){
		const naverLogin = new naver.LoginWithNaverId(
		{
			clientId: "cAfOrXvsQaS0AqdDj6tU",
			callbackUrl: "http://localhost:8080/html/login.html",
			isPopup : false,
			loginButton: {color: "green", type: 3,  height: 50}
		}
		);     
		naverLogin.init();
		naverLogin.getLoginStatus(function (status) {
			if (status) {
				const nickName=naverLogin.user.getNickName();
				const age=naverLogin.user.getAge();
				const birthday=naverLogin.user.getBirthday();
	
				if(nickName===null||nickName===undefined ){
				alert("별명이 필요합니다. 정보제공을 동의해주세요.");
				naverLogin.reprompt();
				return ;  
			}else{
				setLoginStatus();
			}
		}
		});
		console.log(naverLogin);
	
		function setLoginStatus(){			
		
		// const message_area=document.getElementById('message');
		// message_area.innerHTML=`
		// <h3> Login 성공 </h3>
		// <div>user Nickname : ${naverLogin.user.nickname}</div>
		// <div>user Age(범위) : ${naverLogin.user.age}</div>
		// <div>user Birthday : ${naverLogin.user.birthday}</div>
		// `;		

		const button_area=document.getElementById('button_area');
		button_area.innerHTML="<button id='btn_logout'>로그아웃</button>";
	
		const logout=document.getElementById('btn_logout');
		logout.addEventListener('click',(e)=>{
			naverLogin.logout();
			location.replace("http://localhost:8080/navertest.html");
		})		
		
			location.href("../index.html");
		}	
				
	}