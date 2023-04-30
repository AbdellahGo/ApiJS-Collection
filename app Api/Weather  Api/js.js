const input = document.querySelector('#input')
const btnSubmit = document.querySelector('.submit')
let outputs = document.querySelector('.outputs')



btnSubmit.addEventListener('click', getWeather)



async function getWeather() {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=229898cb5a07472087f74058232604&q=${input.value}`)
        let data = await response.json()
        outputs.innerHTML = `
            <h2 class="country">${data.location.country}</h2>
            <h3>${data.location.name}</h3>
            <p class="condition">${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}">
            <div class="heat">${data.current.temp_c}°</div>
            <div class="wind">
                <p>wind <span>${data.current.wind_mph}mph</span></p>
                <p>gust <span>${data.current.gust_mph}mph</span></p>
            </div>
        `
    } catch (error) {
        outputs.innerHTML = `
            <h2>No matching location found.</h2>
        `
    }
}