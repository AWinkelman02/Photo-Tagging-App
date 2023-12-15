//list of objects you are finding with their coordinates and found status

//locate object plus of minus 30 pixels from given point
//select array of coordinates 

//if all objects found, win and display popup form to save 

//logic to fetch based on game selected

    //---------Fetch Game Data-----------
document.addEventListener('DOMContentLoaded', ()=>{
    let gameName = document.querySelector('title').innerHTML;
    fetch(`/${gameName}/data`, {mode: 'cors'})
    .then((response)=>{
        return(response.json());
    })
    .then((response)=>{
        game(response.data);
        console.log(response.data);
    })
});

//need start game modal
//need timer modal
//need submit score form




function game(response){
    const gameArea = document.getElementById('gameArea');
    const gameMenu = document.getElementById('menu');
    const popup = document.getElementById('popup');

    gameData = response;
    
    //---------selection menu-----------
    //prevent default context menu from being displayed
    gameArea.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    //show menu on click relative to click location
    gameArea.addEventListener('contextmenu', function (e) {
        const x = e.pageX;
        const y = e.pageY;
        // Set the position for menu
        menu.style.top = `${y}px`;
        menu.style.left = `${x}px`;
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
                const object = document.createElement('button')
                object.innerHTML = gameData[i].object;
                object.setAttribute('data', `${i}`)
                object.addEventListener('click',()=>{
                    checkCoordinates(menu.getAttribute('xcoord'), menu.getAttribute('ycoord'), object.getAttribute('data'));
                    menu.classList.add('hidden');
                });
                gameMenu.appendChild(object);
            }
        }
    };

    function clearList(){
        gameMenu.innerHTML = '';
    };

    // Hide the menu when clicking outside of it
    const documentClickHandler = function(e) {
        const isClickedOutside = !menu.contains(e.target);
        if (isClickedOutside) {
            // Hide the menu
            menu.classList.add('hidden');
            // Remove the event handler
            document.removeEventListener('click', documentClickHandler);
        }
    };

    //---------Coordinate Check Logic-------------
    function checkCoordinates(x, y, data){
        let found = false;
        let normalizeCoords = gameArea.getBoundingClientRect();
        let relX = x - normalizeCoords.left;
        let relY = y - normalizeCoords.top - window.scrollY;
        let xx = Math.round(relX) - 20;
        let yy = Math.round(relY) - 20;
        
        for (let i = yy; i < yy + 40 && !found; i++) {
            for (let j = xx; j < xx + 40 && !found; j++) {
                if(j === gameData[data].x && i === gameData[data].y){
                    gameData[data].found = true;
                    found = true;
                    placeMarker(data);
                    clearMessage();
                    alertMessage(data, true);
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
        setTimeout(()=>{clearMessage()}, 3600)
    }

    function clearMessage(){
        popup.innerHTML = "";
    }

    //---------Place Marker Logic-------------
    function placeMarker(object){
        let pin = document.createElement('img')
        pin.setAttribute('src', '../images/pin.png')
        pin.setAttribute('alt', 'pin')
        pin.classList.add('pin');
        pin.style.left = `${gameData[object].pinX}px`;
        pin.style.top = `${gameData[object].pinY}px`;
        gameArea.appendChild(pin);
    }
}

game();