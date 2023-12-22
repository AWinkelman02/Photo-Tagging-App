//---------Scroll to Top of Page on Refresh-----------
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
    
//---------Fetch Game Data-----------
document.addEventListener('DOMContentLoaded', ()=>{
    let gameName = document.getElementById('title').innerHTML;
    fetch(`/${gameName}/data`, {mode: 'cors'})
    .then((response)=>{
        return(response.json());
    })
    .then((response)=>{
        game(response.data);
    })
});

let timer = false;

//---------Main Game-----------
function game(response){
    const gameArea = document.getElementById('gameArea');
    const gameMenu = document.getElementById('menu');
    const popup = document.getElementById('popup');
    const body = document.body;

    const startGameButton = document.getElementById('start-button');
    const leaderBoardForm = document.getElementById('leaderboard-form');

    let minute = 0; 
    let second = 0; 
    let count = 0; 


    gameData = response;

    //---------Start Game Modal-----------
    startGameButton.addEventListener('click',()=>{
        timer = true; 
        stopWatch();
        body.classList.remove('lock-body');
        gameArea.classList.remove('lock-game');
    })
    
    //---------selection menu-----------
    //prevent default context menu from being displayed
    gameArea.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    //show menu on click relative to click location
    gameArea.addEventListener('contextmenu', function (e) {

        let x = normalizeCoordinates((e.pageX - e.target.offsetLeft),e.target.width, e.target.naturalWidth)
        let y = normalizeCoordinates((e.pageY - e.target.offsetTop),e.target.height, e.target.naturalHeight)
        // Set the position for menu
        menu.style.top = `${e.pageY}px`;
        menu.style.left = `${e.pageX}px`;
        //set clicked coords to menu to use later
        menu.setAttribute('xCoord', `${x}`);
        menu.setAttribute('yCoord', `${y}`);
        // Show the menu
        menu.classList.remove('hidden');
        //populate menu with options
        clearList();
        createList();
        //hide menu with click
        document.addEventListener('click', documentClickHandler);
    });
    
    function createList(){
        for (let i = 0; i < gameData.length; i++) {
            if(gameData[i].found === false){
                let container = document.createElement('div');
                container.classList.add('bx-menu');
                let image = objImage(gameData[i].object);
                let object = document.createElement('button');
                object.classList.add('bt-menu');
                object.innerHTML = gameData[i].object;
                object.setAttribute('data', `${i}`)
                object.addEventListener('click',()=>{
                    checkCoordinates(menu.getAttribute('xcoord'), menu.getAttribute('ycoord'), object.getAttribute('data'));
                    menu.classList.add('hidden');
                });

                container.append(image, object);
                gameMenu.appendChild(container);
            }
        }
    };

    function objImage(object){
        let image = document.createElement('img');
        image.setAttribute('src', `../images/${object}.png`);
        image.setAttribute('alt', `${object}`);
        image.classList.add('menu-image');
        return image;
    };

    function clearList(){
        gameMenu.innerHTML = '';
    };

    const documentClickHandler = function(e) {
        let isClickedOutside = !menu.contains(e.target);
        if (isClickedOutside) {
            // Hide the menu
            menu.classList.add('hidden');
            // Remove the event handler
            document.removeEventListener('click', documentClickHandler);
        }
    };

    //---------Coordinate Check Logic-------------
    function normalizeCoordinates(coord, dimension, naturalDimension){
        return Math.round((coord / dimension) * naturalDimension);
    }

    function checkCoordinates(x, y, data){
        let found = false;
        let xx = x - 40;
        let yy = y - 40;
        
        for (let i = yy; i < yy + 80 && !found; i++) {
            for (let j = xx; j < xx + 80 && !found; j++) {
                if(j === gameData[data].x && i === gameData[data].y){
                    gameData[data].found = true;
                    found = true;
                    clearMessage();
                    alertMessage(data, true);
                    crossOutObject(data);
                    endGame();
                }
            }
        }
        if(found === false){
            clearMessage();
            alertMessage(data, false);
        }
    };

    //---------Object Found/Not Found Logic-------------
    function alertMessage(data, found){
        const classes = ['alert', 'slide-in', 'slide-out'];
        let alert = document.createElement('div');
        alert.classList.add(...classes);
        if(found === true){
            alert.classList.add('success');
            alert.innerHTML = `You found ${gameData[data].object}!`
        }else{
            alert.classList.add('fail');
            alert.innerHTML = "Try Again"
        }
        popup.appendChild(alert);
        setTimeout(()=>{clearMessage()}, 3505)
    }

    function clearMessage(){
        popup.innerHTML = "";
    }

    function crossOutObject(data){
        let object = document.getElementById(`${gameData[data].object}`);
        object.classList.add('strike-through');
    }

    //---------Stopwatch Logic-------------
    function stopWatch() { 
        if (timer) { 
            count++; 
      
            if (count == 100) { 
                second++; 
                count = 0; 
            } 
      
            if (second == 60) { 
                minute++; 
                second = 0; 
            } 
      
            if (minute == 60) { 
                minute = 0; 
                second = 0; 
            } 
      
            let minString = minute; 
            let secString = second; 
            let countString = count; 
      
            if (minute < 10) { 
                minString = "0" + minString; 
            } 
      
            if (second < 10) { 
                secString = "0" + secString; 
            } 
      
            if (count < 10) { 
                countString = "0" + countString; 
            } 
    
            document.getElementById('min').innerHTML = minString; 
            document.getElementById('sec').innerHTML = secString; 
            document.getElementById('count').innerHTML = countString; 
            setTimeout(()=>{
                stopWatch();
            }, 10); 
        }
    }

    //---------Game End Logic-------------
    function endGame(){
        let score = 0;
        console.log(score);
        gameData.forEach(object => {
            if(object.found === true){
                score++
            }
        });
        if(score === 3){
            populateLeaderBoard();
            leaderBoardForm.show();
            timer = false;
            stopWatch();
            body.classList.add('lock-body');
            gameArea.classList.add('lock-game');
        }
    }

    //---------Populate Leaderboard-------------
    function populateLeaderBoard(){
        let time = document.getElementById('time');
        let gameName = document.getElementById('game');
        time.value = getTime();
        gameName.value = document.querySelector('title').innerHTML;
    }
       
    function getTime(){
        let minString = document.getElementById('min').innerHTML;
        let secString = document.getElementById('sec').innerHTML; 
        let countString = document.getElementById('count').innerHTML; 
        let time = minString+":"+secString+":"+countString;
        return time;
    }
}

game();