//list of objects you are finding with their coordinates and found status
//loop through list and create popup for objects not found
//finding object updates their found status

//locate object plus of minus 30 pixels from given point
//select array of coordinates 

//if all objects found, win and display popup form to save 

//logic to fetch based on game selected
document.addEventListener('DOMContentLoaded', ()=>{
    fetch('/gameTwo/data', {mode: 'cors'})
    .then((response)=>{
        return(response.json());
    })
    .then((response)=>{
        game(response.data);
    })
});

function game(response){
    const gameArea = document.getElementById('gameArea');

    const babyTurtle = [response[0], response[1]]
    
    gameArea.addEventListener('click', (e)=>{
        //clicking will set data attribute of coords to list
        //selecting a button in the list will check the coords
        //if found, remove list, place marker at location, show message of correct
        //if not found, remove list, show incorrect message
        checkCoordinates(e.pageX, e.pageY);
    });
    
    //---------selection menu-------------
    //prevent default context menu from being displayed
    const ele = document.getElementById('element');
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
    
        // Show the menu
        menu.classList.remove('hidden');

        //populate menu with options

        //hide menu with click
        document.addEventListener('click', documentClickHandler);
    });
    
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

    //takes coordinates and checks if stored coordinates are in it
    //will need to take in character name
    function checkCoordinates(x, y){
        let found = false;
        let xx = x - 20;
        let yy = y - 20;
        for (let i = yy; i < yy + 40 && !found; i++) {
          for (let j = xx; j < xx + 40 && !found; j++) {
            if(j === babyTurtle[0] && i === babyTurtle[1]){
                console.log('Found');
                found = true;
            }
          }
        }
        if(found === false){
            console.log('not found')
        }
    };
}

game();