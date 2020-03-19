exports.seed = async function(knex) {
  const testData = [
    {name:"ramen"},
    {name:"hot chocolate mix"},
    {name:"pasta"},
    {name:"water"},
    {name:"sauce"},
    
  ];
  // Deletes (truncate) ALL existing entries and reset id back to 1
  await knex('ingredients').truncate()

  return knex('ingredients').insert(testData);
};
