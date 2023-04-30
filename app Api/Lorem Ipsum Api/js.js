let inputNum = document.querySelector('#input')
let btnGenerat = document.querySelector('#generator')
let btnCopy = document.querySelector('#copy')
let btnDelete = document.querySelector('#delete')
let outbut = document.querySelector('.outbut')

let options = {
    method: "GET",
    headers: { 'X-Api-Key': 'xURKaLZgrbqGGIQc94mAPA==rAr5NwkXkKxUcbAp' }
}

btnGenerat.addEventListener('click', getLorem)

btnCopy.addEventListener('click', copyText)

btnDelete.addEventListener('click', deleteContet)

function deleteContet() {
    let text = outbut.querySelector('p')
    text.remove()
    outbut.style.backgroundColor = ''
}


function copyText() {
    btnCopy.classList.add('active')
    let text = outbut.querySelector('p')
    setTimeout(function () {
        btnCopy.classList.remove('active')
    }, 500)
    navigator.clipboard.writeText(text.textContent)
}

async function getLorem() {
    let respons = await fetch(`https://api.api-ninjas.com/v1/loremipsum?paragraphs=${inputNum.value}`, options)
    let data = await respons.json()
    outbut.innerHTML = `
    <p>${data.text}</p>
    `
    outbut.style.backgroundColor = '#394867'
}







