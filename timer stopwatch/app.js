// ui variables

// const uihour = document.querySelector("#hour")
const uiminute = document.querySelector("#minute")
const uisec = document.querySelector("#seconds")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")
const bd = document.getElementsByTagName('body')
let colors = ['crimson', 'firebrick', 'lightgreen', 'steelblue', 'pink','orangered','gold','blueviolet']
let sec = 0;
let min = 0;
let interval;
let backgroundC;

loadAllEventListeners()

function loadAllEventListeners() {
    startBtn.addEventListener('click', startStopWatch)
    stopBtn.addEventListener('click', stopWatch)
    resetBtn.addEventListener('click', resetWatch)
}


function startStopWatch() {
interval = setInterval(timer, 1000);
backgroundC = setInterval(changeBackground, 2000)

}

function stopWatch() {
    clearInterval(interval)
}

function resetWatch() {
    clearInterval(interval)
    sec = 0;
    min = 0;
    uiminute.textContent = "00"
    uisec.textContent = "00"

}


function timer(){
    var randomNumber = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[randomNumber];
    sec+=1
    uisec.textContent = sec
    
    
    if (sec > 59) {
        uisec.textContent = "00"
        sec = 0
        min +=1
        uiminute.textContent = "0" + min
    } 
}

function changeBackground() {
    
    

    
}