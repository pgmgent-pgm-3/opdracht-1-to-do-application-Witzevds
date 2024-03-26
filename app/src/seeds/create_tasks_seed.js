const tableName = "tasks";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { id: "1", label: "Buy milk", category: "shopping" },
    { id: "2", label: "Buy bread", category: "shopping" },
    { id: "3", label: "Buy cheese", category: "shopping" },
    { id: "4", label: "Buy butter", category: "shopping" },
  ]);
};

export { seed };
