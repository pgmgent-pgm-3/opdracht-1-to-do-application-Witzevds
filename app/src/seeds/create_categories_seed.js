const tableName = "categories";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { id: 1, category: "default", active: true },
    { id: 2, category: "household", active: false },
  ]);
};

export { seed };
