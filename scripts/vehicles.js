const img = document.getElementsByClassName('img')
const div = document.getElementsByClassName('data')

const arrayImg = Array.from(img);
const arrayDiv = Array.from(div);
const arrayVehicles = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42, 44, 45, 46, 50, 51, 53, 54, 55, 56, 57, 60, 62, 67, 69, 70, 71, 72, 73, 76]

async function getVehicle(id) {
    const response = await fetch(`https://swapi.dev/api/vehicles/${id}`);
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
    const p11 = document.createElement('p')

    h2.innerHTML = data.name.toLowerCase()
    p1.innerHTML = `<span>Rotations Period:</span> ${data.rotation_period}`
    p2.innerHTML = `<span>Model:</span> ${data.model}`
    p3.innerHTML = `<span>Manufaturer:</span> ${data.manufacturer}`
    p5.innerHTML = `<span>Cost in Credits:</span> ${data.cos_in_credits}`
    p6.innerHTML = `<span>Length:</span> ${data.length}`
    p7.innerHTML = `<span>Max Atmosphering Speed:</span> ${data.max_atmosphering_speed}`
    p8.innerHTML = `<span>Crew:</span> ${data.crew}`
    p9.innerHTML = `<span>Cargo capacity:</span> ${data.cargo_capacity}`
    p10.innerHTML = `<span>Consumables:</span> ${data.consumables}`
    p11.innerHTML = `<span>Vehicle Class:</span> ${data.vehicle_class}`

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
    info.appendChild(p11)

    console.log(data)
    return info 
}

function getVehicleImg(id) {
    const response =`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`
    console.log(response)
    return response
}

async function popularVehicles(){
    for (let [k,i] of arrayVehicles.entries()){
    const im = document.createElement('img')
    im.src = getVehicleImg(i)
    const VehicleInfo = await getVehicle(i)
    arrayImg[k].appendChild(im)
    arrayDiv[k].appendChild(VehicleInfo)
    }
}

popularVehicles()