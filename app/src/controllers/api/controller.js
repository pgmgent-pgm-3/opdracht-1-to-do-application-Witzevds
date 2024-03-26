import { validationResult } from "express-validator";
import taskItems from "../../models/tasks.js";
import categories from "../../models/categories.js";

export async function submit(req, res) {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Assuming req.body.category contains the ID of the category
    const { label, category } = req.body;

    // Check if category ID is provided
    if (!category) {
      return res.status(400).json({ error: "Category ID is required" });
    }

    // Check if the category exists
    const existingCategory = await categories.query().findById(category);
    if (!existingCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Insert new task with category

    const newTask = await taskItems.query().insert({
      label: label,
      category_id: category, // Assuming the foreign key is named category_id
    });

    return res.status(201).json(newTask);
  } catch (error) {
    console.error("Error inserting task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
