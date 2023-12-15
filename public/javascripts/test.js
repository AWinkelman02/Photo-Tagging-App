const gameArea = document.getElementById('gameArea');

gameArea.addEventListener('click', (e)=>{
    let coords = gameArea.getBoundingClientRect();

    console.log(coords.left, coords.top);
    console.log(e.pageX, e.pageY);

    let relX = e.pageX - coords.left;
    let relY = e.pageY - coords.top - window.scrollY;
    console.log(relX, relY);
});