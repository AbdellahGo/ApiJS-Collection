const inputName = document.querySelector('#input')
const btnPredict = document.querySelector('button')
const predict = document.querySelector('.predict')


btnPredict.addEventListener('click', getGender)

async function getGender() {
    try {
        if (inputName.value.length > 0 && /^[A-Za-z]+$/.test(inputName.value)) {
            const respons = await fetch(`https://api.genderize.io/?name=${inputName.value}`)
            const data = await respons.json()
            let imgPath = ''
            if (data.gender === 'male') {
                predict.style.backgroundColor = '#0081B4'
                imgPath = '/Predict Gender Api/male.png'
            } else {
                predict.style.backgroundColor = '#EA047E'
                imgPath = '/Predict Gender Api/female.png'
            }
            predict.innerHTML = `
            <p class="name">${data.name}</p>
            <div class="image">
                <img src="${imgPath}">
            </div>
            <h3>${data.gender}</h3>
            <p class="probability">probability: ${data.probability}</p>
        `
        } else {
            predict.style.backgroundColor = '#917FB3'
            predict.innerHTML = `<p>Please enter a valid one</p>`
            return;
        }
    } catch (error) {
        predict.style.backgroundColor = '#917FB3'
        predict.innerHTML = `<p>A problem occurred, try again</p>`
    }

}

// /Predict Gender Api/female.png
// /Predict Gender Api/male.png
// https://api.genderize.io/?name=mohamad