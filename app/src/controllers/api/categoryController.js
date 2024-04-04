import categorieItems from "../../models/category.js";
import cryptoRandomString from "crypto-random-string";
import taskItems from "../../models/task.js";

export const getCategories = async (req, res) => {
  const tasks = await categorieItems.query();
  res.json(tasks);
};
export const getCategory = async (req, res) => {
  const id = req.params.id;

  try {
    // Zoek de categorie op basis van het ID
    const category = await categorieItems.query().findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Zoek taken met dezelfde categorie
    const tasks = await taskItems.query().where("category", category.category);

    // Geef de categorie en de bijbehorende taken als reactie
    res.json({ category, tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createCategory = async (req, res) => {
  const category = req.body.category;
  const id = cryptoRandomString({ length: 10, type: "url-safe" });
  const categories = await categorieItems.query().insert({ category });

  res.status(201).json({ message: "Category created", categories, id });
};
export const deleteCategory = async (req, res) => {};
