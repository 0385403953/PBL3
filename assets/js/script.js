
//chuyen dong banner
const listBanner = document.querySelector('.list-banner')
const banners = listBanner.getElementsByTagName('img')
const length = banners.length
let clickBtn = 0;
let Width = banners[0].offsetWidth
setInterval(()=>{
    if(clickBtn==length - 1){
        listBanner.style.transform = `translateX(0px)`
    }
    else{
        clickBtn ++
        listBanner.style.transform = `translateX(${Width * -1 * clickBtn}px)`
    }
},5000)
//nut chuyen banner
const bannerBtnLeft = document.querySelector('.btn-left')
const bannerBtnRight = document.querySelector('.btn-right')
function nextBanner(){
    clickBtn++;
    if(clickBtn==length){
        listBanner.style.transform = `translateX(0px)`
        clickBtn=0;
    }
    else{
        listBanner.style.transform = `translateX(${Width * -1 * clickBtn}px)`
    }
}
function backBanner(){
    clickBtn--;
    if(clickBtn== -1){
        listBanner.style.transform = `translateX(${Width * -1 * (length-1)}px)`
        clickBtn=length-1;
    }
    else{
        listBanner.style.transform = `translateX(${Width * -1 * clickBtn}px)`
    }
}
bannerBtnLeft.addEventListener('click',backBanner)
bannerBtnRight.addEventListener('click',nextBanner)

//dong mo information user
// const divUser = document.querySelector('.div-user')
// const closeIfUser = document.querySelector('.close-if-user')
// const openIfUser = document.querySelector('.open-if-user')
// function showUser(){
//     divUser.classList.add('open')
// }
// function closeUser(){
//     divUser.classList.remove('open')
// }
// openIfUser.addEventListener('click',showUser)
// closeIfUser.addEventListener('click',closeUser)

//dong mo login signin
const openLogin = document.querySelector('.background-log')
const closeLogin = document.querySelector('.close-log')
const openLog = document.querySelector('.open-login-signin')
function openLOG(){
    openLogin.classList.add('open')
}
function closeLOG(){
    openLogin.classList.remove('open')
}
openLog.addEventListener('click',openLOG)
closeLogin.addEventListener('click',closeLOG)
//log in and signin
const signinbtn = document.querySelector('.register-link')
const loginbtn = document.querySelector('.login-link')
const ok = document.querySelector('.ok')
function showSignin(){
    ok.classList.add('okMoveLeft')
    ok.classList.remove('okMoveRight')
}
function showLogin(){
    ok.classList.remove('okMoveLeft')
    ok.classList.add('okMoveRight')
}
signinbtn.addEventListener('click',showSignin)
loginbtn.addEventListener('click',showLogin)
