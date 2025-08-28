// let div = document.getElementById("i");

//       fetch("https://dummyjson.com/recipes")
//         .then((response) => response.json())
//         .then((data) => {
//           let images = "";
//           data.recipes.forEach((recipe) => {
//             images += `<img src="${recipe.image}" />`;
//           });
//           div.innerHTML = images;
//         });




let div = document.getElementById("recipes");

function searchRecipe () {
let query= document.getElementById("searchbox").value;
fetch(`https://dummyjson.com/recipes/search?q=${query}`)
  .then((response) => response.json())
  .then((data) => {
      let cards = ""; 
   if( data.recipes.length===0){
 div.innerHTML="<h3>No Recipes found</h3>";
 return;
}    
  data.recipes.forEach((recipe) => {
      cards += `
      <div class="card">
      <img src="${recipe.image}"/>
      <div class="card-body">
          <h2>${recipe.name}</h2>
          <h3>Cuisine: ${recipe.cuisine}</h3>
          <button onclick="alert ('${recipe.name}')">View Recipe</button>
          </div>
          </div>
          `;
    });
    div.innerHTML = cards;
  });
}
