const inputAmount = document.querySelector('#amount')
const select_1 = document.querySelector('#currency-1')
const select_2 = document.querySelector('#currency-2')
const btnConverter = document.querySelector('.converter')
const resultConverter = document.querySelector('.result')


window.onload = getCurrencys()
btnConverter.addEventListener('click', converterCurrencys)

async function getCurrencys() {
    let respons = await fetch('https://v6.exchangerate-api.com/v6/766600e792da94a632a53dd1/latest/AED')
    let data = await respons.json()
    let allCurrency = Object.keys(data.conversion_rates)
    const options = allCurrency.map((Cury) => `<option value="${Cury}">${Cury}</option>`).join('');
    console.log(options);
    select_1.innerHTML = options;
    select_2.innerHTML = options;
    select_1.value = 'USD'
    select_2.value = 'MAD'
}



async function converterCurrencys() {
    let respons = await fetch('https://v6.exchangerate-api.com/v6/766600e792da94a632a53dd1/latest/AED')
    let data = await respons.json()
    let result = +inputAmount.value * data.conversion_rates[select_2.value] / data.conversion_rates[select_1.value]
    resultConverter.innerHTML = `${inputAmount.value} ${select_1.value} = ${result} ${select_2.value}`
}

