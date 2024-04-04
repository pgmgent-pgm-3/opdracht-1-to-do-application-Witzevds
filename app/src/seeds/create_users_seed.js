const tableName = "users";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { username: "Buy milk", email: "shopping", password: "shopping" },
  ]);
};

export { seed };
