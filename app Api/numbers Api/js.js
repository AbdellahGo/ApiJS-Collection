const inputNum = document.querySelector('#input')
const selectFact = document.querySelector('select')
const btnFact = document.querySelector('.submit')
const randomFact = document.querySelector('.random')
const outputs = document.querySelector('.outputs')


btnFact.addEventListener('click', getFact)

randomFact.addEventListener('click', getRandomFact)


async function getFact() {
    if (inputNum.value) {
        let respons = await fetch(`http://numbersapi.com/${inputNum.value}/${selectFact.value}`)
        let data = await respons.text()
        outputs.innerHTML = `
            <h3>${inputNum.value}</h3>
            <p>${data}</p>
        `
    } else {
        outputs.innerHTML = `
            <h2>You cannot leave input blank</h2>
        `
    }
}

async function getRandomFact() {
    let respons = await fetch(`http://numbersapi.com/random/${selectFact.value}`)
    let data = await respons.text()
    console.log(data.match(/\d+/));
    outputs.innerHTML = `
        <h3>${data.match(/\d+/)}</h3>
        <p>${data}</p>
    `
}
















// http://numbersapi.com/number/type