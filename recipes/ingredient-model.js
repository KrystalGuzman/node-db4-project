const db = require('../data/db_config');

module.exports = {
    getRecipes
  };

//   function getRecipes(id) {
//     return db('ingredients')
//       .where({id: id})
//   }

  function getRecipes(ingredient_id) {
    return db("recipe_ingredients")
    .join("recipes", "recipe_ingredients.recipe_id", "=", "recipes.id")
    .select("title")
    .where({ingredient_id})
    .orderBy("title");
}