let colorMode = document.getElementById('mode-switch');
let header = document.getElementById('navbar');
let body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', ()=>{
    //read cookie
    let mode = readCookie();
    if(!mode){
        document.cookie = "state=light";
        mode = "state=light";
    }
    changeDisplay(mode);
})

colorMode.addEventListener('click', ()=>{
    let mode = readCookie();
    let newMode = setCookie(mode);
    changeDisplay(newMode);
})

function readCookie(){
    let mode = document.cookie;
    return mode
}

function setCookie(state){
    if(state === 'state=dark'){
        document.cookie = "state=light";
        return document.cookie;
    }else{
        document.cookie = "state=dark";
        return document.cookie;
    }
}

function changeDisplay(state){
    if(state === 'state=dark'){
        header.classList.add('darkmode');
        body.classList.add('darkmode');
    }else{
        header.classList.remove('darkmode');
        body.classList.remove('darkmode');
    }
}