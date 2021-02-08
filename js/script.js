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
            <div onclick="foodIngredient()"; class="border bg-white text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img class="img-fluid" src="${food.strMealThumb}" alt="" />
                <h2 class="h4 p-2">${food.strMeal}</h2>
            </div>
        `;
        foodDiv.appendChild(mealsDiv);
    });
};

const foodIngredient = () => {
    const url =` https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            //displayMeal(data.meals);
            ingredientInfo(data.meals);
        });
};

const ingredientInfo = ingredient => {
    const infoDiv = document.getElementById('ingredientDetails');
    ingredient.forEach(element => {
        infoDiv.innerHTML = `
        <img class="img-fluid" src="${element.strMealThumb}" alt="" />
        <h2 class="h4 p-2">${element.strMeal}</h2>
        `;

        console.log(element);
    });
};