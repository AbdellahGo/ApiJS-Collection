let pokeCard = document.querySelector('.poke')
let btngenerate = document.querySelector('.generate')
const colors = {bug: "#26de81",dragon: "#ffeaa7",electric: "#fed330",
    fairy: "#FF0069",fighting: "#30336b",fire: "#f0932b",
    flying: "#81ecec",grass: "#00b894",ground: "#EFB549",
    ghost: "#a55eea",ice: "#74b9ff",normal: "#95afc0",poison: "#6c5ce7",
    psychic: "#a29bfe",rock: "#2d3436",water: "#0190FF",dark: "#181823"
};

btngenerate.addEventListener('click', getPokeCart)



async function getPokeCart() {
    let randomNumber = Math.round(Math.random() * 1000)
    let respons = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    let pokemonData = await respons.json()
    pokeCard.innerHTML = `
        <div class="hp"><span>HP</span> ${pokemonData.stats[0].base_stat}</div>
        <img src="${pokemonData.sprites.other["official-artwork"].front_default}" alt="">
        <h3>${pokemonData.forms[0].name}</h3>
        <div class="types">
        </div>
        <ul class="abilities">
            <li>${pokemonData.stats[1].base_stat} <span>attack</span></li>
            <li>${pokemonData.stats[2].base_stat} <span>defense</span></li>
            <li>${pokemonData.stats[5].base_stat} <span>speed</span></li>
        </ul>
    `
    if (pokemonData.types.length > 1) {
        for (let i = 0; i < pokemonData.types.length; i++) {
            pokeCard.querySelector('.types').innerHTML += `<p>${pokemonData.types[i].type.name}</p>`
        }
    } else {
        pokeCard.querySelector('.types').innerHTML = `<p>${pokemonData.types[0].type.name}</p>`
    }
    pokeCard.style.setProperty('--after-bg-color', `${colors[pokemonData.types[0].type.name]}`);
}
