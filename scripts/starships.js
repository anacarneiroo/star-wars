const img = document.getElementsByClassName('img')
const div = document.getElementsByClassName('data')

const arrayImg = Array.from(img);
const arrayDiv = Array.from(div);
const ids = [1, 2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23];  

const arrayShips = [2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28,29,31,32,39,40,41,43,47,48,49,52,58,59,61,63,64,65,66,68,74,75]

async function getStarship(id) {
    const response = await fetch(`https://swapi.dev/api/starships/${id}`);
    const data = await response.json();

    const info = document.createElement('div')

    const h2 = document.createElement('h2')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')

    h2.innerHTML = data.name.toLowerCase()
    p1.innerHTML = `<span>Model:</span> ${data.model} ` 
    p2.innerHTML = `<span>Manufacturer </span> ${data.manufacturer}`
    p3.innerHTML = `<span>Max atmosphering speed:</span> ${data.max_atmosphering_speed}`
    p4.innerHTML = `<span>Cost in credits:</span> ${data.cost_in_credits}`

    info.appendChild(h2)
    info.appendChild(p2)
    info.appendChild(p1)
    info.appendChild(p3)
    info.appendChild(p4)

    console.log(data)
    return info 
}

function getStarshipImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    console.log(response)
    return response
}

async function popularStarships(){
    for (let [b,i] of arrayShips.entries()){
        const im = document.createElement('img')
        im.src = getStarshipImg(i)
        const StarshipInfo = await getStarship(i)
        arrayImg[b].appendChild(im);
        arrayDiv[b].appendChild(StarshipInfo);
    }
}

popularStarships()

