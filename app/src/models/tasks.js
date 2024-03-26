import knex from "../lib/Knex.js";
import { Model } from "objection";

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
}

export default taskItems;
