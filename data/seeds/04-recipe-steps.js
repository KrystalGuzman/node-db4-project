exports.seed = async function(knex) {
  const testData = [
    { recipe_id: 1, step: 1, instructions: "boil water in saucepan" },
    { recipe_id: 1, step: 2, instructions: "add noodles" },
    { recipe_id: 1, step: 3, instructions: "stir in flavor packet" },
    { recipe_id: 2, step: 1, instructions: "heat up water in mug" },
    { recipe_id: 2, step: 2, instructions: "add chocolate mix" },
    { recipe_id: 2, step: 3, instructions: "stir and enjoy" },
    { recipe_id: 3, step: 1, instructions: "boil water in pot" },
    { recipe_id: 3, step: 2, instructions: "add noodles" },
    { recipe_id: 3, step: 3, instructions: "drain water" },
    { recipe_id: 3, step: 4, instructions: "stir in sauce" },
  ];
  // Deletes (truncate) ALL existing entries and reset id back to 1
  await knex('recipe_steps').truncate()

  return knex('recipe_steps').insert(testData);
};
