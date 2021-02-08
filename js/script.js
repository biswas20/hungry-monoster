const searchItem = () => {
    const searchMeal = document.getElementById('inputValue').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMeal(data.meals);
        });
};

const displayMeal = meals => {
    const foodDiv = document.getElementById('foodItems');
    foodDiv.innerHTML = '';
    meals.forEach(food => {
        const mealsDiv = document.createElement('div');
        mealsDiv.className = 'col-md-3';
        mealsDiv.innerHTML = `
            <div onclick="foodIngredient('${food.idMeal}')"; class="border bg-white text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img class="img-fluid" src="${food.strMealThumb}" alt="" />
                <h2 class="h4 p-2">${food.strMeal}</h2>
            </div>
        `;
        foodDiv.appendChild(mealsDiv);
    });
};

const foodIngredient = (id) => {
    const url =` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            ingredientInfo(data.meals);
        });
};

const ingredientInfo = ingredient => {
    const infoDiv = document.getElementById('ingredientDetails');
    ingredient.forEach(element => {
        infoDiv.innerHTML = `
        <img class="img-fluid mb-3" src="${element.strMealThumb}" alt="" />
        <li>${element.strIngredient1}</li>
        <li>${element.strIngredient2}</li>
        <li>${element.strIngredient3}</li>
        <li>${element.strIngredient4}</li>
        <li>${element.strIngredient5}</li>
        <li>${element.strIngredient6}</li>
        <li>${element.strIngredient7}</li>
        <li>${element.strIngredient8}</li>
        `;
    });
};