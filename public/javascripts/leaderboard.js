let leaderboard = [];

const marioButton = document.getElementById('mario');
const cyberButton = document.getElementById('cyber');
const spaceButton = document.getElementById('space');
const table = document.getElementById('leaderboard');

//---------Fetch Leaderboard Data-----------
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(`/leaderboard/data`, {mode: 'cors'})
    .then((response)=>{
        return(response.json());
    })
    .then((response)=>{
        leaderboard = response.leaderboard;
    })
});

//---------Button Event Listeners-----------
marioButton.addEventListener('click', ()=>{
    table.classList.remove('hidden');
    clearTable()
    leaderboard.forEach(record => {
        if(record.game === 'Mario-Castle'){
            createTableRow(record);
        }
    });
})

cyberButton.addEventListener('click', ()=>{
    table.classList.remove('hidden');
    clearTable()
    leaderboard.forEach(record => {
        if(record.game === 'Cyber-City'){
            createTableRow(record);
        }
    });
})

spaceButton.addEventListener('click', ()=>{
    table.classList.remove('hidden');
    clearTable()
    leaderboard.forEach(record => {
        if(record.game === 'Space-Party'){
            createTableRow(record);
        }
    });
})

//---------Table Helper Logic-----------
function createTableRow(record){
    let tableRow = document.createElement('tr');
    let nameDetail = document.createElement('td');
    let timeDetail = document.createElement('td');

    nameDetail.innerHTML = record.name;
    timeDetail.innerHTML = record.time;

    tableRow.append(nameDetail, timeDetail);
    table.appendChild(tableRow);
}

function clearTable(){
    table.innerHTML = '';
    let tableHead = document.createElement('tr');
    let nameHead = document.createElement('th');
    let timeHead = document.createElement('th');

    nameHead.innerHTML = 'Name';
    timeHead.innerHTML = 'Time';
    tableHead.append(nameHead, timeHead);
    table.appendChild(tableHead);
}