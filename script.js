const vehicles = document.getElementById('vehicles')
const species = document.getElementById('species')
const characters = document.getElementById('characters')
const planets = document.getElementById('planets')
const starships = document.getElementById('starships')
const movies = document.getElementById('movies')

const info = document.getElementById('info')
const button = document.getElementById('button')

let cont = 1;

async function getCharacter(id) {
    let response = await fetch(`https://swapi.dev/api/people/${id}`);
    let data = await response.json();
    console.log(data);
}

function getSpecieImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/species/${id}.jpg`
    return response
}

function getVehicleImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`
    return response
}

function getCharacterImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    return response
}

function getPlanetImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    return response
}

function getStarshipImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    return response
}

function getMovieImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/films/${id}.jpg`
    return response
}

const showInfo = () => {
    button.style.animationName = ''; 
    setTimeout(() => {
        button.style.animationName = 'animar'; 
    }, 10);
    if (cont === 1){
        info.style.display = 'flex'
        cont -= 1
    }
    else{
        info.style.display = 'none'
        cont +=1
    } 
}

characters.style.backgroundImage = `url(${getCharacterImg(11)})`
vehicles.style.backgroundImage = `url(${getVehicleImg(18)})`
species.style.backgroundImage = `url(${getSpecieImg(9)})`
planets.style.backgroundImage = `url(${getPlanetImg(2)})`
starships.style.backgroundImage = `url(${getStarshipImg(9)})`
movies.style.backgroundImage = `url(${getMovieImg(1)})`
  
button.addEventListener(('click'), showInfo)