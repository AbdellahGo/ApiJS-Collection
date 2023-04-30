const inputWord = document.getElementById('input')
const btnSearch = document.getElementById('btnSearch')
const dic = document.querySelector('.dic')
let wordValue = ''

inputWord.addEventListener('input', () => {
    wordValue = inputWord.value
})

btnSearch.addEventListener('click', () => {
    dictionary()
    inputWord.value = ''
})


async function dictionary() {
    try {
        let respons = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordValue}`)
        let data = await respons.json()
        let phonetics = data[0].phonetics
        let meanings = data[0].meanings
        let text = ''
        let audio = ''
        let partOfSpeech = ''
        let definition = ''
        let example = ''
        for (let i = 0; i < phonetics.length; i++) {
            for (let i = 0; i < phonetics.length; i++) {
                if (!text && phonetics[i].text) {
                    text = phonetics[i].text;
                }
                if (!audio && phonetics[i].audio) {
                    audio = phonetics[i].audio;
                }
            }
        }
        for (let i = 0; i < meanings.length; i++) {
            if (!partOfSpeech && meanings[i].partOfSpeech) {
                partOfSpeech = meanings[i].partOfSpeech;
            }
            for (let j = 0; j < meanings[i].definitions.length; j++) {
                if (!definition && meanings[i].definitions[j].definition) {
                    definition = meanings[i].definitions[j].definition;
                }
                if (!example && meanings[i].definitions[j]["example"]) {
                    example = meanings[i].definitions[j]["example"]
                }
            }
        }
        dic.innerHTML = `
            <div class="word">
                <h3>${wordValue}</h3>
                <i class="fa-solid fa-volume-high" onclick="playAudio()"><audio id="myAudio" src="${audio}"></audio></i>
            </div>
            <p class="phonetic">${partOfSpeech} ${text}</p>
            <p class="definition">${definition}</p>
            <p class="example">${example}</p>
        `
    } catch (error) {
        dic.innerHTML = `<h2>No Definitions Found</h2>`
    }
}

function playAudio() {
    const audio = document.getElementById("myAudio");
    audio.play();
}







