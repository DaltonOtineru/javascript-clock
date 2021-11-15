function setClock() {
const time = new Date();
const localTime = time.toLocaleTimeString();
const splitTime = localTime.split(':');
const periodSplit = splitTime[2].split(' ');
document.getElementById('hours').innerHTML = splitTime[0];
document.getElementById('minutes').innerHTML = splitTime[1];
document.getElementById('seconds').innerHTML = periodSplit[0];
document.getElementById('period').innerHTML = periodSplit[1];
}

function executeClock() {
    setInterval(function() {
    setClock();
    }, 1000 );
};

executeClock();


