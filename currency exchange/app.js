// Define ui variables.
const selection1 = document.getElementById('currency1')
const selection2 = document.getElementById('currency2')
const convertBtn = document.getElementById('convert')
const amount = document.getElementById('amount')
let livetext = document.getElementById('livetext')
const uiResult = document.getElementById('result')
let currency1;
let currency2;
let ratio;
let result;

// API Config
const API_VERSION = 1
const BASE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@${API_VERSION}/{date}/{endpoint}`

fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
.then((response) => {return response.json()})
.then((data) => {
    // Object loop through.
    output = ""
    texts = ""
    
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
          let i = (`${key}: ${data[key]}`);
          texts += ` <span class="p-2 border border-white"> ${key} </span> `
          output += `
          <option id="${key}" value="${key}">${data[key]}</option>
          
          `
          selection1.innerHTML = output
          selection2.innerHTML = output
          livetext.innerHTML = texts
        }
      }
})


selection1.addEventListener('change', (e) => {
    currency1 = e.target.value;
    
})


selection2.addEventListener('change', (e) => {
    currency2 = e.target.value
    
})

convertBtn.addEventListener('click', convert)



function convert(e) {
    if (currency1 !== undefined && currency2 !== undefined) {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency1}/${currency2}.json`).then((response) => {
        
        return response.json();
        
    
    }).then((data) => { 
        uiResult.classList.remove('d-none')
        getRatio(data,currency2)
        
        })
        
        
    } else  {
        let alert = document.getElementById('createdalert')
        if (alert != null) {
            alert.remove()
        } else {
            let div = document.createElement('div')
            div.setAttribute('id','createdalert')
            div.classList.add('d-block', 'mt-3','alert', 'alert-danger')
            div.innerHTML = "Check your selection."
            uiResult.classList.remove('d-none')
            uiResult.classList.remove('alert','alert-info')
            uiResult.appendChild(div)  
        }

        
    }

    
    
    e.preventDefault()
}
/* 
 */

function getRatio(data,rateValue) {
    myObj = data 
    ratio = myObj[rateValue]

    getResult()
}

function getResult() {
    result = amount.value * ratio
    uiResult.innerText= `You can convert ${amount.value} ${currency1} to ${result.toFixed(2)} ${currency2}`
}

