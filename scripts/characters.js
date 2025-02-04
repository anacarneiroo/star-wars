const img = document.getElementsByClassName('img')
const div = document.getElementsByClassName('data')

const arrayImg = Array.from(img);
const arrayDiv = Array.from(div);

async function getCharacter(id) {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();

    const info = document.createElement('div')

    const h2 = document.createElement('h2')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    h2.innerHTML = data.name.toLowerCase()
    p1.innerHTML = `<span>Birth Year:</span> ${data.birth_year} ` 
    p2.innerHTML = `<span>Gender:</span> ${data.gender}`
    p3.innerHTML = `<span>Skin Color:</span> ${data.skin_color}`

    info.appendChild(h2)
    info.appendChild(p2)
    info.appendChild(p1)
    info.appendChild(p3)

    console.log(data)
    return info 
}

function getCharacterImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    console.log(response)
    return response
}

async function popularCharacters(){
    for (let i = 0; i < arrayImg.length; i++){
    const im = document.createElement('img')
    im.src = getCharacterImg(i + 1)
    const characterInfo = await getCharacter(i + 1)
    arrayImg[i].appendChild(im)
    arrayDiv[i].appendChild(characterInfo)
    }
}

popularCharacters()

