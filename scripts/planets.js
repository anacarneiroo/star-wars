const img = document.getElementsByClassName('img')
const div = document.getElementsByClassName('data')

const arrayImg = Array.from(img);
const arrayDiv = Array.from(div);

async function getPlanet(id) {
    const response = await fetch(`https://swapi.dev/api/planets/${id}`);
    const data = await response.json();

    const info = document.createElement('div')

    const h2 = document.createElement('h2')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')
    const p6 = document.createElement('p')
    const p7 = document.createElement('p')
    const p8 = document.createElement('p')
    const p9 = document.createElement('p')
    const p10 = document.createElement('p')

    h2.innerHTML = data.name.toLowerCase()
    p1.innerHTML = `<span>Rotations Period:</span> ${data.rotation_period}`
    p2.innerHTML = `<span>Rotation Period:</span> ${data.rotation_period}`
    p3.innerHTML = `<span>Orbital Period:</span> ${data.orbital_period}`
    p5.innerHTML = `<span>Diameter:</span> ${data.diameter}`
    p6.innerHTML = `<span>Climate:</span> ${data.climate}`
    p7.innerHTML = `<span>Gravity:</span> ${data.gravity}`
    p8.innerHTML = `<span>Terrain:</span> ${data.terrain}`
    p9.innerHTML = `<span>Surface Water:</span> ${data.surface_water}`
    p10.innerHTML = `<span>Surface Water:</span> ${data.surface_water}`

    info.appendChild(h2)
    info.appendChild(p1)
    info.appendChild(p2)
    info.appendChild(p3)
    info.appendChild(p4)
    info.appendChild(p5)
    info.appendChild(p6)
    info.appendChild(p7)
    info.appendChild(p8)
    info.appendChild(p9)
    info.appendChild(p10)

    console.log(data)
    return info 
}

function getPlanetImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    console.log(response)
    return response
}

async function popularPlanets(){
    for (let i = 0; i < arrayImg.length; i++){
    const im = document.createElement('img')
    im.src = getPlanetImg(i + 1)
    const PlanetInfo = await getPlanet(i + 1)
    arrayImg[i].appendChild(im)
    arrayDiv[i].appendChild(PlanetInfo)
    }
}

popularPlanets()