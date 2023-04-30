let qoute = document.querySelector('.qoute')

async function getQuote() {
    let respons = await fetch('https://api.quotable.io/quotes/random')
    let data = await respons.json()
    console.log(data);
    qoute.innerHTML = `
    <p id="qoute">${data[0].content}</p>
    <h3 class="author" id="author">${data[0].author}</h3>
    `
}