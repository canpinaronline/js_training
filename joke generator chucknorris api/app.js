const categories = document.getElementById('jokecategories')
const outputDiv = document.getElementById('output')
const SEARCH_URL = "https://api.chucknorris.io/jokes/random?category="

const generate = document.getElementById('generate')
generate.addEventListener('click',generateRandomJoke)

function generateRandomJoke(e) {
    let value = categories.value;
    const text = categories.options[categories.selectedIndex].text;
    fetch(SEARCH_URL+text).then((response)=> {
        return response.json()
    }).then((data)=> {
        console.log(data);
        showJoke(data)
    })
}

function showJoke(apidata) {
    output = `
    
    <p class="p-2">Joke: <span class="p-2 badge badge-primary">${apidata.value}</span></p>
    <p class="p-2">Category: <span class="p-2 badge badge-warning">${apidata.categories}</span></p>
    <p class="p-2">Created at: <span class="p-2 badge badge-danger">${apidata.created_at}</span></p>
    `;
    
    outputDiv.innerHTML = output
}

generateRandomJoke()
