const img = document.getElementsByClassName('img')
const div = document.getElementsByClassName('data')

const arrayImg = Array.from(img);
const arrayDiv = Array.from(div);

async function getMovie(id) {
    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await response.json();

    const info = document.createElement('div')

    const h2 = document.createElement('h2')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    h2.innerHTML = data.title.toLowerCase()
    p1.id = 'release'
    p1.innerHTML = `<span>Year of Release:</span> ${data.release_date} ` 
    p2.innerHTML = data.opening_crawl
    p2.id = 'more'
    p3.innerHTML = `<span>Director:</span> ${data.director}`
    p3.id = 'director'

    info.appendChild(h2)
    info.appendChild(p2)
    info.appendChild(p1)
    info.appendChild(p3)

    console.log(data)
    return info 
}

function getMovieImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/films/${id}.jpg`
    console.log(response)
    return response
}

async function popularMovies(){
    for (let i = 0; i < arrayImg.length; i++){
    const im = document.createElement('img')
    im.src = getMovieImg(i + 1)
    const MovieInfo = await getMovie(i + 1)
    arrayImg[i].appendChild(im)
    arrayDiv[i].appendChild(MovieInfo)
    }
}

popularMovies()

