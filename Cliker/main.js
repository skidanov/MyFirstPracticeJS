let clicks = 1;

const TIMEOUT = 2000;

const DISPLAY = document.querySelector('#display');
const BUTTON = document.querySelector('#button');
const COUNTER = document.querySelector('#counter');
const RESET = document.querySelector('#reset')
 let a =1

function counter() {
    COUNTER.textContent = ++clicks
}

function start() {
    BUTTON.onclick = counter

    const STARTTIME = Date.now()
    DISPLAY.textContent = formatTime(TIMEOUT)

    const INTERVAL = setInterval(() => {

        const DELTA = Date.now() - STARTTIME
        DISPLAY.textContent = formatTime(TIMEOUT - DELTA)
    }, 100)
    setTimeout(() => {
        DISPLAY.textContent = 'Time is over'
        BUTTON.onclick = null
        clearInterval(INTERVAL)
    }, TIMEOUT)
}

BUTTON.onclick = start;

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2)
}

function reset() {
    DISPLAY.textContent = 'Start again'
    BUTTON.onclick = start;
    COUNTER.textContent = null
    clicks = 1
}

RESET.onclick = reset;