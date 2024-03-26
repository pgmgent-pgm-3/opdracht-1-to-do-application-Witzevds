const tableName = "task";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.string("label").notNullable();
    table.string("category").notNullable().defaultTo("default");
    table.boolean("completed").defaultTo(false);
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
