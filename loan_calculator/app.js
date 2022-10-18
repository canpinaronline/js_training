let loan = document.querySelector("#loan");
let rate = document.querySelector("#annualrate");
let paymentYear = document.querySelector("#paymentyear");
let content = document.querySelector(".content");

loadEventListeners()

function loadEventListeners() {
    document.querySelector("#calculate").addEventListener("click", calculateRate);
}

function calculateRate(e) {
    


        const principal = parseFloat(loan.value);
        const calculatedInterest = parseFloat(rate.value) / 100 / 12;
        const calculatedPayments = parseFloat(paymentYear.value) * 12;
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal*x*calculatedInterest)/(x-1);
        const totalPrice = (monthly * calculatedPayments).toFixed(2);
        const totalInterest = ((monthly * calculatedPayments)-principal).toFixed(2);
        addToUi(totalPrice,totalInterest)
        function addToUi(totalLoan,interestLoan){
    
            if (content.innerText.length > 0) {
                content.innerText = ""
            }
            const para = document.createElement("p")
            para.innerText = `You will pay ${totalPrice} dollars in ${paymentYear.value} years
                                Monthly cost : ${monthly.toFixed(2)} dollars
                                Your total interest value is: ${totalInterest} dollars`
            content.appendChild(para)
        }
        
        e.preventDefault();
    
    
}


