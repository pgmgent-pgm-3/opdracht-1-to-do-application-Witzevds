import task from "../models/tasks.js";
import categories from "../models/categories.js";
export const index = async (req, res) => {
  const taskItems = await task.query();
  console.log(taskItems);
  for (let i = 0; i < taskItems.length; i++) {
    console.log(taskItems[i].label);
  }
  const categorieItems = await categories.query();
  res.render("pages/index", {
    taskItems,
    categorieItems,
  });
};
