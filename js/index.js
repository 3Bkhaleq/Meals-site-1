



var meals = []

async function getmeal(){
    var apiresponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    // var x = await apiresponse.json();
    meals = await apiresponse.json();
    console.log(meals)



     displayMeal()
}
getmeal();

// async function getAll()
// {
//     await getmeal();
//     await getmeal();
//     await getmeal();
//     await getmeal();
//     document;
// }
// getAll()


function displayMeal(meals){
    var box = ``;
    for(var i =0;i<meals.length;i++){
box += `
<div class="card-Meal position-relative" style="width: 18rem;">
      <img src="${meals[i].strCategoryThumb}" class="card-img-top " alt=".">
          <div class="lyer  position-absolute " >
            <h2>${meals[i].strCategory}</h2>
          </div>
      </div>

`
    }
document.getElementById("cards-Meals").innerHTML=box;
};







