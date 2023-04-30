const input = document.querySelector('#input')
const btnSearch = document.querySelector('.search')
const meal = document.querySelector('.meal')

input.addEventListener('input', () => {
    input.value
})

btnSearch.addEventListener('click', () => {
    getMeal()
})



async function getMeal() {
    try {
        let respons = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
        let data = await respons.json()
        meal.innerHTML = `
            <img class="image" src="${data.meals[0].strMealThumb}">
            <div class="name">
                <h2>${data.meals[0].strMeal}</h2>
                <p>${data.meals[0].strArea}</p>
                <span class="exit head" onclick= (headenRecipe())>X</span>
                <p class="reset head">${data.meals[0].strInstructions}.</p>
            </div>
            <ul class="Ingredients"></ul>
            <button class="show" onclick= (showRecipe())>view Recipe</button>
        `
        for (let i = 1; true; i++) {
            if (data.meals[0][`strIngredient${i}`] !== "" && data.meals[0][`strMeasure${i}`] !== "") {
                meal.querySelector('ul.Ingredients').innerHTML += `
                    <li>${data.meals[0][`strIngredient${i}`]}${data.meals[0][`strMeasure${i}`]}</li>
                `
            } else {
                break
            }
        }
    } catch (erroe) {
        meal.innerHTML = `<h2 class="error">This meal was not found</h2>`
    }
}



function showRecipe() {
    let nameElement = meal.querySelector('.name');
    let img = document.createElement('img');
    img.src = meal.querySelector('.image').src;
    nameElement.insertBefore(img, nameElement.firstChild);
    nameElement.style.cssText = 'position: absolute; top:0; width: 100%; height: calc(100% + 10px); overflow-y: scroll;';
    nameElement.querySelector('span.exit').classList.remove('head');
    nameElement.querySelector('p.reset').classList.remove('head');
}


function headenRecipe() {
    const imgElement = meal.querySelector('.name img');
    imgElement.remove();
    meal.querySelector('.name').style.cssText = '';
    meal.querySelector('.name p.reset').classList.add('head');
    meal.querySelector('.name span.exit').classList.add('head');
}