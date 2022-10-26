// Generate random color bg
let colors = ["FF8787","4FA095","FF97C1","150050","4C6793"]
let randomColor = Math.floor(Math.random() * colors.length);


function randomUrl(randomNumber) {
    let url = `https://api.themoviedb.org/3/movie/${randomNumber}?api_key=d4d80b3152e2f091cd45c0b2b791db37`
    getFile(url)
}

async function getFile(url) {
    await fetch(url)
    .then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            location.reload()
        }
        
    }).then((data)=> {
        
            console.log(data);
            console.log(data.id);
            document.body.style.backgroundColor = `#${colors[randomColor]}`
            const thumbnail = document.getElementById('thumbnail')
            thumbnail.src = `https://image.tmdb.org/t/p/original/${data.poster_path}`
            const movie = document.getElementById('movieid')
            movie.innerText = data.original_title
            const moviedesc = document.getElementById('moviedesc')
            moviedesc.innerText = data.overview
            const movierating = document.getElementById('movierating')
            movierating.innerText = `IMDB: ${data.vote_average}`
            
        
        
        
    })
}

let randomNumber = Math.floor(Math.random() * 10000);
randomUrl(randomNumber)






