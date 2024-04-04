import taskItems from "../../models/task.js";

export const getTasksApi = async (req, res) => {
  const tasks = await taskItems.query();

  res.json(tasks);
};
export const getTaskApi = async (req, res) => {
  const id = req.params.id;
  const task = await taskItems.query().findById(id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
};

export const createTaskApi = async (req, res) => {
  const label = req.body.label;
  const category = req.body.category;

  const task = await taskItems.query().insert({ label, category });

  res.status(201).json({ message: "Task created", task });
};
export const deleteTaskApi = async (req, res) => {
  const { label } = req.params;
  const deleteCount = await taskItems.query().deleteById(label);
  if (deleteCount === 0) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json({ message: "Task deleted" });
};

export const updateTaskApi = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  if (body.id !== id) {
    return res
      .status(400)
      .json({ message: "ID in body does not match ID in URL" });
  }
  const task = await task.query().patchAndFetchById(body.id, body);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
};
