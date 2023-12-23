let leaderboard = [];

const marioButton = document.getElementById('mario');
const cyberButton = document.getElementById('cyber');
const spaceButton = document.getElementById('space');
const table = document.getElementById('leaderboard');
const title = document.getElementById('leadTitle');

//---------Fetch Leaderboard Data-----------
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(`/leaderboard/data`, {mode: 'cors'})
    .then((response)=>{
        return(response.json());
    })
    .then((response)=>{
        leaderboard = response.leaderboard;
        console.log(leaderboard)
        clearTable();
        showLeaderboard('Mario-Castle');
        setTitle('Mario-Castle');
    })
});

//---------Button Event Listeners-----------
marioButton.addEventListener('click', (e)=>{
    clearTable();
    showLeaderboard(e.target.getAttribute('data-game'));
    setTitle(e.target.getAttribute('data-game'));
})

cyberButton.addEventListener('click', (e)=>{
    clearTable();
    showLeaderboard(e.target.getAttribute('data-game'));
    setTitle(e.target.getAttribute('data-game'));
})

spaceButton.addEventListener('click', (e)=>{
    clearTable();
    showLeaderboard(e.target.getAttribute('data-game'));
    setTitle(e.target.getAttribute('data-game'));
})

//---------Title Logic-----------
function setTitle(name){
    if(name === 'Mario-Castle'){
        title.innerHTML = 'Mario Castle';
    } else if (name === 'Cyber-City'){
        title.innerHTML = 'Cyber City';
    } else {
        title.innerHTML = 'Space Party';
    }
}

//---------Table Helper Logic-----------
function showLeaderboard(name){
    let place = 1;
    leaderboard.forEach(record => {
        if(record.game === name){
            createTableRow(place, record);
            place++;
        }
    });
}


function createTableRow(place, record){
    let tableRow = document.createElement('tr');
    let placeDetail = document.createElement('td');
    let nameDetail = document.createElement('td');
    let timeDetail = document.createElement('td');

    placeDetail.innerHTML = place;
    nameDetail.innerHTML = record.name;
    timeDetail.innerHTML = record.time;

    tableRow.append(placeDetail, nameDetail, timeDetail);
    table.appendChild(tableRow);
}

function clearTable(){
    table.innerHTML = '';
}