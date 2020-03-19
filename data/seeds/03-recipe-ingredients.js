exports.seed = async function(knex) {
  const testData = [
    { recipe_id: 1, ingredient_id: 1, quantity: 1, unit: "package" },
    { recipe_id: 1, ingredient_id: 4, quantity: 2, unit: "cup" },
    { recipe_id: 2, ingredient_id: 2, quantity: 3, unit: "scoops" },
    { recipe_id: 2, ingredient_id: 4, quantity: 1, unit: "cup" },
    { recipe_id: 3, ingredient_id: 3, quantity: 1, unit: "pound" },
    { recipe_id: 3, ingredient_id: 4, quantity: 4, unit: "quart" },
    { recipe_id: 3, ingredient_id: 5, quantity: 1, unit: "jar" },
  ];
  // Deletes (truncate) ALL existing entries and reset id back to 1
  // await knex('recipe_ingredients').truncate()

  return knex('recipe_ingredients').insert(testData);
};
