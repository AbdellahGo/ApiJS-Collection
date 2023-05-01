let btnRandom = document.querySelector('button')
let user = document.querySelector('.outbout')




btnRandom.addEventListener('click', getRandomUser)


async function getRandomUser() {
    try {
        let respons = await fetch(`https://random-data-api.com/api/v2/users?is_json=true`)
        let data = await respons.json()
        user.innerHTML = `
            <div class="image">
                <img src="${data.avatar}" alt="">
            </div>
            <h3>${data.first_name} ${data.last_name}</h3>
            <p class="job">${data.employment.title}</p>
            <p class="location"><i class="fa-solid fa-location-dot"></i> ${data.address.city}</p>
        `
    } catch(error) {
        user.innerHTML = `
            <h2>An error occurred, try again</h2>
        `
    }
}
