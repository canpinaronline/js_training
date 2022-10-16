let button = document.getElementsByTagName("button");
let screen = document.querySelector(".screen")
let equal = document.querySelector(".equals")
let ac = document.querySelector(".ac")

loadAllEvents()
function loadAllEvents(){
    ac.addEventListener('click', clear)
    equal.addEventListener('click', equals);
}


for(let i = 0; i < button.length; i++) {
    
    if (i !=17 && i != 0){
        button[i].addEventListener("click", numberPressed);
    }
        
}

function numberPressed() { 
    screen.innerText = screen.innerText + this.value
}


function equals() {
    let sonuc = eval(screen.innerText)
    screen.innerText = sonuc
}


function clear() {
    screen.innerText = ""
}
