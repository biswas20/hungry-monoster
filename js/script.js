fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response =>response.json())
.then(data =>{
    let ul=document.getElementById('list-item');
   let categoryArray=data.categories;
   console.log(categoryArray);
   let img=categoryArray[0].strCategoryThumb;
   console.log(img);
   let mealNames=categoryArray.map(meal=>meal.strCategory);
   for(let i=0; i<mealNames.length; i++){
       let mealItem=mealNames[i];
       let li=document.createElement("li");;
       li.innerText =mealItem;
       ul.appendChild(li);
       
   }
    
    

});
