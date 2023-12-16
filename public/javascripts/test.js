const gameArea = document.getElementById('gameArea');

gameArea.addEventListener('click', (e)=>{
    //const x = normalizeCoordinates((e.pageX - e.target.offsetLeft),e.target.width, e.target.naturalWidth)
    //const y = normalizeCoordinates((e.pageY - e.target.offsetTop),e.target.height, e.target.naturalHeight)

    console.log(x, y);
});

function normalizeCoordinates(coord, dimension, naturalDimension){
    return Math.round((coord / dimension) * naturalDimension);
}

placeMarker(data);

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