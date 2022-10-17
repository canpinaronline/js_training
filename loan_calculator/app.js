let loan = document.querySelector("#loan");
let rate = document.querySelector("#annualrate");
let paymentYear = document.querySelector("#paymentyear");
let content = document.querySelector(".content");

loadEventListeners()

function loadEventListeners() {
    document.querySelector("#calculate").addEventListener("click", calculateRate);
}

function calculateRate(e) {
    
        let totalInterest = parseFloat(rate.value * paymentYear.value) * 0.01
        let interest = parseFloat(loan.value * totalInterest)
        let totalPrice = parseFloat((loan.value) * (totalInterest)) + parseFloat(loan.value)

        addToUi(totalPrice,interest)
        
        e.preventDefault();
    
    
}


function addToUi(totalLoan,interestLoan){
    
    if (content.innerText.length > 0) {
        content.innerText = ""
    }
    const para = document.createElement("p")
    para.innerText = `You will pay ${totalLoan.toFixed(2)} dollars in ${paymentYear.value} years
                        Monthly cost : ${(totalLoan/(paymentYear.value*12)).toFixed(2)} dollars
                        Your Loan amount: ${interestLoan.toFixed(2)} dollars`
    content.appendChild(para)
}