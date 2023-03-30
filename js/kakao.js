Kakao.init('e9dff5feb5cb34020412f0da014b1dc4'); //발급받은 키 중 javascript키를 사용해준다.
console.log(Kakao.isInitialized()); // sdk초기화여부판단
function kakaoLogin() {
    Kakao.Auth.login({
    success: function (response) {
        Kakao.API.request({
        url: '/v2/user/me',
        success: function (response) {
            console.log(response)
        },
        fail: function (error) {
            console.log(error)
        },
        })
    },
        fail: function (error) {
            console.log(error)
        },
    })
}
//카카오로그아웃  
function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
    Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
            console.log(response)
            alert('로그아웃 성공');
        },
        fail: function (error) {
            console.log(error)
            alert('로그아웃 실패');
        },
    })
    Kakao.Auth.setAccessToken(undefined)
    }
}