import knex from "../lib/Knex.js";
import { Model } from "objection";
import categorieItems from "./category.js";

Model.knex(knex);

class taskItems extends Model {
  static get tableName() {
    return "tasks";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["label"],
      properties: {
        id: { type: "integer" },
        label: { type: "string", minLength: 1, maxLength: 255 },
        category: { type: "string", minLength: 1, maxLength: 255 },
        completed: { type: "boolean" },
      },
    };
  }
  static get relationMappings() {
    return {
      categories: {
        relation: Model.BelongsToOneRelation,
        modelClass: categorieItems,
        join: {
          from: "tasks.id",
          to: "categories.category",
        },
      },
    };
  }
}

export default taskItems;
