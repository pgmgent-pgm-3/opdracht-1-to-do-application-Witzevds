import knex from "../lib/Knex.js";
import { Model } from "objection";

Model.knex(knex);

class categorieItems extends Model {
  static get tableName() {
    return "categories";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "string", minLength: 1, maxLength: 255 },
        name: { type: "string", minLength: 1, maxLength: 255 },
        completed: { type: "boolean" },
        category: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}

export default categorieItems;
