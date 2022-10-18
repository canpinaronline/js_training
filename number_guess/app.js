let userGuess = document.querySelector("#userguess")
let predict = document.querySelector("#predict")

// Create random integer between 1 to 10
let randomNumber = Math.floor(Math.random() * 10) + 1
let chance = 3;

let result = document.querySelector(".result")
let para = document.createElement("p")

loadEventListeners()

function loadEventListeners(){

    // Predict button event listener
    predict.addEventListener('click',predictionMethod)

}

function predictionMethod(e){

    if (randomNumber == userGuess.value) {
        console.log("congrates");
        userGuess.disabled = true;
        
        para.innerText = `Your predict is ${userGuess.value} and the actual number is ${randomNumber}`
        para.classList.add('resulttext-true')
        result.appendChild(para)
        predict.innerText = "New Game"
        this.addEventListener('click',function() {newGame() })

    } else {
        if (chance != 0) {
            chance-=1
        } else {
            para.innerText = `Your predict is ${userGuess.value} and the actual number is ${randomNumber}`
            para.classList.add('resulttext')
            result.appendChild(para)
            userGuess.disabled = true;
            predict.innerText = "New Game"
            this.addEventListener('click',function() {newGame() }) 
            
        }
        
        
    }

    
}


function newGame() {
    location.reload()
}