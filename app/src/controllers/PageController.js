import task from "../models/task.js";
import categories from "../models/category.js";

export const index = async (req, res) => {
  const taskItems = await task.query();
  const user = req.user;
  const categorieItems = await categories.query();
  res.render("pages/index", {
    taskItems,
    categorieItems,
    user,
  });
};
