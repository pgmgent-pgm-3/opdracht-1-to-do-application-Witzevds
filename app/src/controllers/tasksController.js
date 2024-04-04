import task from "../models/task.js";

export const handleForm = async (req, res, next) => {
  const method = req.body.method;

  if (method == "POST") {
    createTask(req, res, next);
  }
  if (method == "DELETE") {
    deleteTask(req, res, next);
  }
  if (method == "PATCH") {
    updateTask(req, res, next);
  }
  if (method == "PUT") {
    completeTask(req, res, next);
  }
};

export const createTask = async (req, res) => {
  try {
    const { label, category } = req.body;
    await task.query().insert({ label, category });
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    await task.query().deleteById(id);
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { label } = req.body;
    await task.query().patchAndFetchById(id, { label });
    res.redirect("/");
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const completeTask = async (req, res) => {
  try {
    const { id } = req.params;
    await task.query().patchAndFetchById(id, { completed: true });
    res.redirect("/");
  } catch {
    res.status(500).json({
      message: err.message,
    });
  }
};
