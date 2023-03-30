// 가게별 이미지 리스트
let imgArr1 = [`./image/restaurant/cri/1.jpg`, `./image/restaurant/cri/2.jpg`, `./image/restaurant/cri/3.jpg`, `./image/restaurant/cri/4.jpg`, `./image/restaurant/cri/5.jpg`, `./image/restaurant/cri/6.jpg`]



// 가게 리스트
let r1 = {dir:"cri", name:"크리스피포크타운", score:"5.0", loc:"용산", addr1:"서울 용산구 녹사평대로40길 47 1F", addr2:"서울 용산구 이태원동 455-33 1F", tell:"0507-1483-2849", theme:"양식", price:"만원-2만원", park:"주차공간없음", worktime:"12:00 - 22:30", breaktime:"15:00 - 17:00", lastorder:"21:30", closedday:"화", img:imgArr1}
let r2 = {dir:"pad", name:"파델라", score:"4.9", loc:"마포", addr1:"서울특별시 마포구 연남로1길 11 1F", addr2:"서울시 마포구 연남동 567-34 1F", tell:"02-336-3396", theme:"양식", price:"만원-2만원", park:"주차공간없음", worktime:"11:00 - 21:00", breaktime:"15:00 - 17:00", lastorder:"20:00", closedday:"없음"}
let r3 = {dir:"giy", name:"기연각", score:"4.8", loc:"성동", addr1:"서울특별시 성동구 용답중앙길 76", addr2:"서울시 성동구 용답동 44-1", tell:"02-310-3898", theme:"중식", price:"만원 미만", park:"주차공간없음", worktime:"17:00 - 21:00", breaktime:"없음", lastorder:"20:00", closedday:"월"}
let r4 = {dir:"man", name:"매니멀스모크하우스", score:"4.7", loc:"용산", addr1:"서울특별시 용산구 녹사평대로40길 47 2F", addr2:"서울시 용산구 이태원동 455-33 2F", tell:"02-790-6788", theme:"양식", price:"4만원 이상", park:"주차공간없음", worktime:"11:30 - 22:30", breaktime:"없음", lastorder:"22:00", closedday:"없음"}
let r5 = {dir:"per", name:"페리지", score:"4.6", loc:"강남", addr1:"서울특별시 강남구 봉은사로68길 6-5 1F", addr2:"서울시 강남구 삼성동 114-40 1F", tell:"02-248-7895", theme:"양식", price:"3만원-4만원", park:"발렛", worktime:"17:00 - 22:00", breaktime:"없음", lastorder:"21:15", closedday:"일, 월"}
let r6 = {dir:"ppa", name:"빠사삭튀김포차", score:"4.5", loc:"강남", addr1:"서울 강남구 강남대로 358 2층 201호", addr2:"서울시 강남구 역삼동 826-14", tell:"02-3285-0709", theme:"한식", price:"만원 미만", park:"주차공간없음", worktime:"17:00 - 01:00", breaktime:"없음", lastorder:"없음", closedday:"월"}
let r7 = {dir:"mio", name:"미오도쿄다이닝", score:"4.4", loc:"성동", addr1:"서울특별시 성동구 연무장5가길 7 현대테라스타워 117호", addr2:"서울시 성동구 성수동2가 314-13 현대테라스타워 117호", tell:"02-2223-2120", theme:"일식", price:"만원-2만원", park:"무료주차 가능 1시간 15분 무료", worktime:"11:30 - 22:00", breaktime:"15:00 - 17:30", lastorder:"없음", closedday:"일"}
let r8 = {dir:"eli", name:"엘리스리틀이태리", score:"4.3", loc:"마포", addr1:"서울특별시 마포구 백범로 152 201동 1F", addr2:"서울시 마포구 공덕동 476 201동 1F", tell:"010-2668-3033", theme:"양식", price:"만원-2만원", park:"무료주차 가능 1시간 무료", worktime:"11:30 - 22:00", breaktime:"15:00 - 17:30", lastorder:"없음", closedday:"없음"}
let r9 = {dir:"piz", name:"피제리아호키포키", score:"4.2", loc:"성동", addr1:"서울 강남구 강남대로102길 31 1층", addr2:"서울 강남구 역삼동 617-4", tell:"02-523-5747", theme:"양식", price:"만원 미만", park:"무료주차 가능", worktime:"11:30 - 22:00", breaktime:"15:00 - 18:00", lastorder:"14:30, 21:00", closedday:"없음"}
let r10 = {dir:"use", name:"유즈라멘", score:"4.1", loc:"강남", addr1:"서울 강남구 테헤란로8길 22 1층 102호", addr2:"서울시 강남구 역삼동 824-29", tell:"070-4177-0365", theme:"일식", price:"만원 미만", park:"주차공간없음", worktime:"11:30 - 21:00", breaktime:"15:00 - 17:00", lastorder:"20:30", closedday:"없음"}
let r11 = {dir:"new", name:"뉴질랜드스토리", score:"4.0", loc:"용산", addr1:"서울 용산구 보광로59길 14-1 돼지래스토랑 둘째", addr2:"서울시 용산구 이태원동 128-10", tell:"070-7523-6265", theme:"양식", price:"만원-2만원", park:"유료주차 가능 1시간 6,000원", worktime:"10:30 - 18:00", breaktime:"14:00 - 15:00", lastorder:"17:00", closedday:"화"}
let r12 = {dir:"yak", name:"야키토리나루토", score:"3.9", loc:"마포", addr1:"서울특별시 마포구 독막로9길 26", addr2:"서울시 마포구 서교동 403-23", tell:"02-332-6835", theme:"일식", price:"만원-2만원", park:"주차공간없음", worktime:"16:00 - 21:00", breaktime:"없음", lastorder:"20:15", closedday:"없음"}
let r13 = {dir:"bur", name:"버거파크", score:"3.8", loc:"강남", addr1:"서울 강남구 언주로 608", addr2:"서울 강남구 논현동 275-3", tell:"02-747-3005", theme:"양식", price:"만원-2만원", park:"주차공간없음", worktime:"11:00 - 21:00", breaktime:"15:00 - 17:00", lastorder:"20:00", closedday:"월"}

// 가게모음 배열
let restaurant_arr = [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13]

// 테마
let t_west = {theme:"양식", img:"./image/theme/western.jpg"}
let t_ja = {theme:"일식", img:"./image/theme/japanese.jpg"}
let t_kr = {theme:"한식", img:"./image/theme/korean.jpg"}
let t_ch = {theme:"중식", img:"./image/theme/chinese.jpg"}

// 테마모음 배열
let theme_arr = [t_west, t_ja, t_ch, t_kr]