let colorMode = document.getElementById('mode-switch');
let page = document.querySelector('title').innerHTML;

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
        addDarkMode();
    }else{
        removeDarkMode();
    }
}

//dmb1 dmb2 and dml
//darkmode box and darkmode letter
//query select all

function addDarkMode(){
    dmList = 4;

    for (let i = 1; i <= dmList; i++) {
        let dm = document.querySelectorAll(`[data-dm='${i}']`)
        dm.forEach(element => {
            element.classList.add(`darkmode${i}`)
        });   
    }
    colorMode.classList.add('darkmode5')
}

function removeDarkMode(){
    dmList = 4;

    for (let i = 1; i <= dmList; i++) {
        let dm = document.querySelectorAll(`[data-dm='${i}']`)
        dm.forEach(element => {
            element.classList.remove(`darkmode${i}`)
        });   
    }
    colorMode.classList.remove('darkmode5')
}

//1 = dark 1 background
//2 = dark 2 background
//3 = letters
//4 = hover