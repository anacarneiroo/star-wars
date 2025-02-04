const img = document.getElementsByClassName('img')
const div = document.getElementsByClassName('data')

const arrayImg = Array.from(img);
const arrayDiv = Array.from(div);

async function getSpecie(id) {
    const response = await fetch(`https://swapi.dev/api/species/${id}`);
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

    h2.innerHTML = data.name.toLowerCase()
    p1.innerHTML = `<span>Classification:</span> ${data.classification}`
    p2.innerHTML = `<span>Designation:</span> ${data.designation}`
    p3.innerHTML = `<span>Average Height:</span> ${data.average_height}`
    p5.innerHTML = `<span>Skin Colors:</span> ${data.skin_colors}`
    p6.innerHTML = `<span>Hair Colors:</span> ${data.hair_colors}`
    p7.innerHTML = `<span>Eye Colors:</span> ${data.eye_colors}`
    p8.innerHTML = `<span>Average Lifespan:</span> ${data.average_lifespan}`
    p9.innerHTML = `<span>Language:</span> ${data.language}`

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

    console.log(data)
    return info 
}

function getSpecieImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/species/${id}.jpg`
    console.log(response)
    return response
}

async function popularSpecies(){
    for (let i = 0; i < arrayImg.length; i++){
    const im = document.createElement('img')
    im.src = getSpecieImg(i + 1)
    const SpecieInfo = await getSpecie(i + 1)
    arrayImg[i].appendChild(im)
    arrayDiv[i].appendChild(SpecieInfo)
    }
}

popularSpecies()