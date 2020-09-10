// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('summerBtn').addEventListener('click', setSummer);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
document.getElementById('winterBtn').addEventListener('click', setWinter);
document.getElementById('springBtn').addEventListener('click', setSpring);

////////

function setSummer() {
    setSeason('Summer', '#1BA848');
}

function setAutumn() {
    setSeason('Autumn', '#FE6732');
}

function setWinter() {
    setSeason('Winter','#1C64B9');
}

function setSpring() {
    setSeason('Spring', '#0E94D1');
}

/////////

function setSeason(name, color) {

    document.getElementById('season-text').innerHTML = name;
    document.getElementById('main-img').src = 'images/' + name.toLowerCase() + '.jpg';
    document.getElementById('song').src = 'songs/' + name.toLowerCase() + '.mp3';
    document.body.style.backgroundColor = color;

    document.getElementById(name.toLowerCase() + 'Btn').classList.add('activeBtn');
}


