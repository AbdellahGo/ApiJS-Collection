let inputGif = document.querySelector('#input')
let btnSearch = document.querySelector('#search')
let content = document.querySelector('section')

getGif()
btnSearch.addEventListener('click', getGif)


async function getGif() {
    try {
        let respons = await fetch(`https://g.tenor.com/v1/search?q=${inputGif.value}&key=LIVDSRZULELA`)
        let data = await respons.json()
        let fragment = ''
        for (let i = 0; i < data.results.length; i++) {
            fragment += `
                <article>
                    <img src="${data.results[i].media[0].gif.url}" alt="">
                    <button class="copy" onclick= "copyText(this)">Copy Link</button>
                </article>
            `
            console.log(i + data.results[i].media[0].gif.url);
        }
        content.innerHTML = fragment
    } catch (error) {
        let elError = document.createElement('h1')
        elError.appendChild(document.createTextNode('A problem occurred, try searching again'))
        content.parentElement.appendChild(elError)
        content.remove()
    }
}

function copyText(button) {
    button.classList.add('active')
    let src = button.parentElement.querySelector('img').src
    navigator.clipboard.writeText(src)
    setTimeout(() => {
        button.classList.remove('active')
    }, 500)
}

// "https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8"