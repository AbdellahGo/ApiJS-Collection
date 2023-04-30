let btnMemes = document.querySelector('button')
let memes = document.querySelector('.memes')


btnMemes.addEventListener('click', getMemes)


async function getMemes() {
    try {
        let respons = await fetch('https://meme-api.com/gimme')
        let data = await respons.json()
        memes.innerHTML = `
            <img src="${data.preview[2]}" alt="">
            <a href="${data.postLink}"><h3 class="title">${data.title}</h3></a>
        `
    } catch(error) {
        memes.innerHTML = `<h2>Try again</h2>`
    }
}