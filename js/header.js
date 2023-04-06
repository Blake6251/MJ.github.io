$(document).ready(function () {
    let title = $(document).find("title").text()    // 인덱스 페이지만 경로가 ./로 시작
    let startDir = "../"
    if (title === "index" || title === "맛나리") {
        startDir = "./"
    }
    else {
        startDir = "../"
    }

    function appendLogs() {
        for (let i = 0; i < logs.length; i++) {
            let log = logs[i]
            // filter : 배열에서 r.name이 log인것들만 남김, forEach : 배열을 순환하며 #logs에 append
            restaurant_arr.filter(r => r.name === log).forEach(r => $("#logs").append(`<li class="log"><a href="${startDir}html/restaurant_info.html?name=${r.name}"><img src="${startDir}image/restaurant/${r.dir}/1.jpg"><div><h1>${r.name}</h1><h2>${r.loc}&nbsp;&nbsp;&nbsp;${r.theme}&nbsp;&nbsp;&nbsp;${r.score}</h2></div></a></li>`))
        }
    }
    function appendFavors() {
        favors = JSON.parse(sessionStorage.getItem("favors")) || [];
        for (let i = 0; i < favors.length; i++) {
            let favor = favors[i]
            // filter : 배열에서 r.name이 log인것들만 남김, forEach : 배열을 순환하며 #logs에 append
            restaurant_arr.filter(r => r.name === favor).forEach(r => $("#logs").append(`<li class="log"><a href="${startDir}html/restaurant_info.html?name=${r.name}"><img src="${startDir}image/restaurant/${r.dir}/1.jpg"><div><h1>${r.name}</h1><h2>${r.loc}&nbsp;&nbsp;&nbsp;${r.theme}&nbsp;&nbsp;&nbsp;${r.score}</h2></div></a></li>`))
        }
    }


    $("#log_btn").click(function () {
        let toggle = $(".hidden_log").css("display")
        if (toggle == "none") {
            $("#recent_log").css({ "border-bottom": "3px solid #f76e11" })
            $("#favor_log").css({ "border-bottom": "1px solid silver" })
            $("#logs").empty()
            appendLogs()
            $(".hidden_log").css({ "display": "block" })
        }
        else {
            $(".hidden_log").css({ "display": "none" })
        }
    })

    // 세션스토리지에서 키가 "logs"인 값을 가져와서 배열로 변환
    let logs = JSON.parse(sessionStorage.getItem("logs")) || [];
    let favors = JSON.parse(sessionStorage.getItem("favors")) || [];

    /* 쿼리스트링 */
    // ?로 나누기
    let url = location.href.split("?");
    let data = url[1];
    data = decodeURIComponent(data);
    // &로 나누기, 필터별로 나누기
    let name = data.split("ame=")[1];
    //console.log("name : " + name)

    if (name) {
        logs.unshift(name) // 배열 맨 앞에 추가
        let set = new Set(logs) // 배열 set으로 변경, set은 중복불가
        logs = [...set] //  set을 배열로 변경
    }

    // 배열을 다시 세션 스토리지에 저장
    sessionStorage.setItem("logs", JSON.stringify(logs));   // 키 : "logs", 값 : JSON.stringify(logs)

    $("#recent_log").css({ "border-bottom": "3px solid #f76e11" })
    $("#favor_log").css({ "border-bottom": "1px solid silver" })
    appendLogs()

    $("#recent_log").click(function () {
        $("#recent_log").css({ "border-bottom": "3px solid #f76e11" })
        $("#favor_log").css({ "border-bottom": "1px solid silver" })
        $("#logs").empty()
        appendLogs()
    })
    $("#favor_log").click(function () {
        $("#favor_log").css({ "border-bottom": "3px solid #f76e11" })
        $("#recent_log").css({ "border-bottom": "1px solid silver" })
        $("#logs").empty()
        //$("#logs").append(`<li class="log">찜한가게임시1</li>`)
        //$("#logs").append(`<li class="log">찜한가게임시2</li>`)
        appendFavors()
    })
})
//sessionStorage에서 로그인 정보를 가져와 로그인 상태를 확인


function loginStatus(){
    const login = JSON.parse(sessionStorage.getItem('login'));
    if (login && login.login_id && login.login_pass) {        
        document.getElementById('login-btn').textContent = '로그아웃';
        document.getElementById('login-btn').onclick = logout;
    
    }
    function logout() {
        // 로그아웃 처리
        sessionStorage.removeItem('login');;
        alert("로그아웃되었습니다.");
        // 로그인 페이지로 이동
        window.location.href = 'login.html';
    }
}