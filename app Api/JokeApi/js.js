let joke = document.querySelector('.joke')
let btnRandom = document.querySelector('.randomJoke')


async function getJoke() {
    try {
        let respons = await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        let result = await respons.json()
        return result.joke
    } catch (error) {
        return 'not found a joke'
    }
}

btnRandom.addEventListener('click', async () => {
    joke.classList.remove('fade')
    joke.innerHTML = await getJoke()
    joke.classList.add('fade')
})