// 가게별 이미지 리스트
let imgArr1 = [`./image/restaurant/cri/1.jpg`, `./image/restaurant/cri/2.jpg`, `./image/restaurant/cri/3.jpg`, `./image/restaurant/cri/4.jpg`, `./image/restaurant/cri/5.jpg`, `./image/restaurant/cri/6.jpg`]
let imgArr2 = [`./image/restaurant/pad/1.jpg`, `./image/restaurant/pad/2.jpg`, `./image/restaurant/pad/3.jpg`, `./image/restaurant/pad/4.jpg`, `./image/restaurant/pad/5.jpg`, `./image/restaurant/pad/6.jpg`]
let imgArr3 = [`./image/restaurant/giy/1.jpg`, `./image/restaurant/giy/2.jpg`, `./image/restaurant/giy/3.jpg`, `./image/restaurant/giy/4.jpg`]
let imgArr4 = [`./image/restaurant/man/1.jpg`, `./image/restaurant/man/2.jpg`, `./image/restaurant/man/3.jpg`, `./image/restaurant/man/4.jpg`, `./image/restaurant/man/5.jpg`, `./image/restaurant/man/6.jpg`]
let imgArr5 = [`./image/restaurant/per/1.jpg`, `./image/restaurant/per/2.jpg`, `./image/restaurant/per/3.jpg`, `./image/restaurant/per/4.jpg`, `./image/restaurant/per/5.jpg`, `./image/restaurant/per/6.jpg`]
let imgArr6 = [`./image/restaurant/ppa/1.jpg`, `./image/restaurant/ppa/2.jpg`, `./image/restaurant/ppa/3.jpg`, `./image/restaurant/ppa/4.jpg`, `./image/restaurant/ppa/5.jpg`, `./image/restaurant/ppa/6.jpg`]
let imgArr7 = [`./image/restaurant/mio/1.jpg`, `./image/restaurant/mio/2.jpg`, `./image/restaurant/mio/3.jpg`, `./image/restaurant/mio/4.jpg`, `./image/restaurant/mio/5.jpg`, `./image/restaurant/mio/6.jpg`]
let imgArr8 = [`./image/restaurant/eli/1.jpg`, `./image/restaurant/eli/2.jpg`, `./image/restaurant/eli/3.jpg`, `./image/restaurant/eli/4.jpg`, `./image/restaurant/eli/5.jpg`, `./image/restaurant/eli/6.jpg`]
let imgArr9 = [`./image/restaurant/piz/1.jpg`, `./image/restaurant/piz/2.jpg`, `./image/restaurant/piz/3.jpg`, `./image/restaurant/piz/4.jpg`, `./image/restaurant/piz/5.jpg`, `./image/restaurant/piz/6.jpg`]
let imgArr10 = [`./image/restaurant/use/1.jpg`, `./image/restaurant/use/2.jpg`, `./image/restaurant/use/3.jpg`, `./image/restaurant/use/4.jpg`, `./image/restaurant/use/5.jpg`, `./image/restaurant/use/6.jpg`]
let imgArr11 = [`./image/restaurant/new/1.jpg`, `./image/restaurant/new/2.jpg`, `./image/restaurant/new/3.jpg`, `./image/restaurant/new/4.jpg`, `./image/restaurant/new/5.jpg`]
let imgArr12 = [`./image/restaurant/yak/1.jpg`, `./image/restaurant/yak/2.jpg`, `./image/restaurant/yak/3.jpg`, `./image/restaurant/yak/4.jpg`]
let imgArr13 = [`./image/restaurant/bur/1.jpg`, `./image/restaurant/bur/2.jpg`, `./image/restaurant/bur/3.jpg`, `./image/restaurant/bur/4.jpg`]



// 가게 리스트
let r1 = {intro:"국내에서 보기 힘든 스타일의 타코!", dir:"cri", name:"크리스피포크타운", score:"5.0", loc:"용산", addr1:"서울 용산구 녹사평대로40길 47 1F", addr2:"서울 용산구 이태원동 455-33 1F", tell:"0507-1483-2849", theme:"양식", price:"만원-2만원", park:"주차공간없음", worktime:"12:00 - 22:30", breaktime:"15:00 - 17:00", lastorder:"21:30", closedday:"화", img:imgArr1}
let r2 = {intro:"따뜻한 분위기의 레스토랑 식전빵부터 맛있는 찐맛집!", dir:"pad", name:"파델라", score:"4.9", loc:"마포", addr1:"서울특별시 마포구 연남로1길 11 1F", addr2:"서울시 마포구 연남동 567-34 1F", tell:"02-336-3396", theme:"양식", price:"만원-2만원", park:"주차공간없음", worktime:"11:00 - 21:00", breaktime:"15:00 - 17:00", lastorder:"20:00", closedday:"없음", img:imgArr2}
let r3 = {intro:"신선한 재료, 자기 색채 강한 레시피의 기연각 새로운 스타일의 중식당", dir:"giy", name:"기연각", score:"4.8", loc:"성동", addr1:"서울특별시 성동구 용답중앙길 76", addr2:"서울시 성동구 용답동 44-1", tell:"02-310-3898", theme:"중식", price:"만원 미만", park:"주차공간없음", worktime:"17:00 - 21:00", breaktime:"없음", lastorder:"20:00", closedday:"월", img:imgArr3}
let r4 = {intro:"정통 아메리칸 텍사스 스타일 풀포크 바베큐", dir:"man", name:"매니멀스모크하우스", score:"4.7", loc:"용산", addr1:"서울특별시 용산구 녹사평대로40길 47 2F", addr2:"서울시 용산구 이태원동 455-33 2F", tell:"02-790-6788", theme:"양식", price:"4만원 이상", park:"주차공간없음", worktime:"11:30 - 22:30", breaktime:"없음", lastorder:"22:00", closedday:"없음", img:imgArr4}
let r5 = {intro:"뉴욕-이탈리안 스타일 생면 파스타 맛집", dir:"per", name:"페리지", score:"4.6", loc:"강남", addr1:"서울특별시 강남구 봉은사로68길 6-5 1F", addr2:"서울시 강남구 삼성동 114-40 1F", tell:"02-248-7895", theme:"양식", price:"3만원-4만원", park:"발렛", worktime:"17:00 - 22:00", breaktime:"없음", lastorder:"21:15", closedday:"일, 월", img:imgArr5}
let r6 = {intro:"매일 새기름을 사용하는 식어도 바삭함이 살아있는 튀김 맛집", dir:"ppa", name:"빠사삭튀김포차", score:"4.5", loc:"강남", addr1:"서울 강남구 강남대로 358 2층 201호", addr2:"서울시 강남구 역삼동 826-14", tell:"02-3285-0709", theme:"한식", price:"만원 미만", park:"주차공간없음", worktime:"17:00 - 01:00", breaktime:"없음", lastorder:"없음", closedday:"월", img:imgArr6}
let r7 = {intro:"도쿄 수제 함바그 고젠 전문점", dir:"mio", name:"미오도쿄다이닝", score:"4.4", loc:"성동", addr1:"서울특별시 성동구 연무장5가길 7 현대테라스타워 117호", addr2:"서울시 성동구 성수동2가 314-13 현대테라스타워 117호", tell:"02-2223-2120", theme:"일식", price:"만원-2만원", park:"무료주차 가능 1시간 15분 무료", worktime:"11:30 - 22:00", breaktime:"15:00 - 17:30", lastorder:"없음", closedday:"일", img:imgArr7}
let r8 = {intro:"화덕 피자 굽는 과정을 볼수있는 피자와 파스타로 브런치 하기 좋은곳!", dir:"eli", name:"엘리스리틀이태리", score:"4.3", loc:"마포", addr1:"서울특별시 마포구 백범로 152 201동 1F", addr2:"서울시 마포구 공덕동 476 201동 1F", tell:"010-2668-3033", theme:"양식", price:"만원-2만원", park:"무료주차 가능 1시간 무료", worktime:"11:30 - 22:00", breaktime:"15:00 - 17:30", lastorder:"없음", closedday:"없음", img:imgArr8}
let r9 = {intro:"뉴욕식 화덕피자 전문점!", dir:"piz", name:"피제리아호키포키", score:"4.2", loc:"성동", addr1:"서울 강남구 강남대로102길 31 1층", addr2:"서울 강남구 역삼동 617-4", tell:"02-523-5747", theme:"양식", price:"만원 미만", park:"무료주차 가능", worktime:"11:30 - 22:00", breaktime:"15:00 - 18:00", lastorder:"14:30, 21:00", closedday:"없음", img:imgArr9}
let r10 = {intro:"이베리코 차슈와 다채로운 향신료를 사용한 유즈라멘", dir:"use", name:"유즈라멘", score:"4.1", loc:"강남", addr1:"서울 강남구 테헤란로8길 22 1층 102호", addr2:"서울시 강남구 역삼동 824-29", tell:"070-4177-0365", theme:"일식", price:"만원 미만", park:"주차공간없음", worktime:"11:30 - 21:00", breaktime:"15:00 - 17:00", lastorder:"20:30", closedday:"없음", img:imgArr10}
let r11 = {intro:"동물 동반이 가능한 샌드위치 전문점 건강하면서도 맛있는 샌드위치!", dir:"new", name:"뉴질랜드스토리", score:"4.0", loc:"용산", addr1:"서울 용산구 보광로59길 14-1 돼지래스토랑 둘째", addr2:"서울시 용산구 이태원동 128-10", tell:"070-7523-6265", theme:"양식", price:"만원-2만원", park:"유료주차 가능 1시간 6,000원", worktime:"10:30 - 18:00", breaktime:"14:00 - 15:00", lastorder:"17:00", closedday:"화", img:imgArr11}
let r12 = {intro:"오마카세와 야키토리 모두 즐길수 있는 정통 일식점", dir:"yak", name:"야키토리나루토", score:"3.9", loc:"마포", addr1:"서울특별시 마포구 독막로9길 26", addr2:"서울시 마포구 서교동 403-23", tell:"02-332-6835", theme:"일식", price:"만원-2만원", park:"주차공간없음", worktime:"16:00 - 21:00", breaktime:"없음", lastorder:"20:15", closedday:"없음", img:imgArr12}
let r13 = {intro:"수제버거가 유명한 버거파크! 접근성이 정말 좋은 수제버거집",dir:"bur", name:"버거파크", score:"3.8", loc:"강남", addr1:"서울 강남구 언주로 608", addr2:"서울 강남구 논현동 275-3", tell:"02-747-3005", theme:"양식", price:"만원-2만원", park:"주차공간없음", worktime:"11:00 - 21:00", breaktime:"15:00 - 17:00", lastorder:"20:00", closedday:"월", img:imgArr13}

// 가게모음 배열
let restaurant_arr = [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13]

// 테마
let t_west = {theme:"양식", img:"./image/theme/western.jpg"}
let t_ja = {theme:"일식", img:"./image/theme/japanese.jpg"}
let t_kr = {theme:"한식", img:"./image/theme/korean.jpg"}
let t_ch = {theme:"중식", img:"./image/theme/chinese.jpg"}

// 테마모음 배열
let theme_arr = [t_west, t_ja, t_ch, t_kr]