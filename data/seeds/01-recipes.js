exports.seed = async function(knex) {
  const testData = [
    {title:"ramen"},
    {title:"hot chocolate"},
    {title:"pasta"},
  ];
  // Deletes (truncate) ALL existing entries and reset id back to 1
  await knex('recipes').truncate()

  return knex('recipes').insert(testData);
};
