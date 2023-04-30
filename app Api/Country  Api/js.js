let input = document.getElementById("input");
let btnSearch = document.getElementById("search");
let outputs = document.querySelector(".outputs");

let contry = "";

input.addEventListener("input", () => {
    contry = input.value;
});

btnSearch.addEventListener("click", getContry);

async function getContry() {
    try {
        let respons = await fetch(
            `https://restcountries.com/v3.1/name/${contry}?fullText=true`
        );
        let data = await respons.json();
        let currkeys = Object.keys(data[0].currencies);
        outputs.innerHTML = `
            <div class="flag">
                <img src="${data[0].flags.png}">
                <h3>${contry}</h3>
            </div>
            <div class="ditelse">
                <ul>
                    <li>Capital: <span>${data[0].capital[0]}</span></li>
                    <li>Continent: <span>${data[0].region}</span></li>
                    <li>Area: <span>${data[0].area}</span></li>
                    <li>Population: <span>${data[0].population}</span></li>
                    <li>Currency: <span>${data[0].currencies[currkeys[0]].name
            }</span></li>
                    <li>Common Languages: <span>${Object.values(
                data[0].languages
            ).join("/")}</span></li>
                </ul>
            </div>
        `;
    } catch (error) {
        outputs.innerHTML = `<h2>Not Found</h2>`;
    }
}

