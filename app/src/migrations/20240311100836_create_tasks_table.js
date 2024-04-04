const tableName = "tasks";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.string("label").notNullable();
    table.string("category").notNullable().defaultTo("default");
    table.boolean("completed").defaultTo(false);
    table.foreign("category").references("categories.category");
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
