//import statements
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { create } from "express-handlebars";
import { PORT, SOURCE_PATH, VIEWS_PATH } from "./constants.js";
import { index } from "./controllers/PageController.js";
import {
  register,
  postRegister,
  postLogin,
  login,
  logout,
} from "./controllers/authController.js";
import HandlebarsHelpers from "./lib/HandlebarsHelpers.js";
import bodyParser from "body-parser";

// API controllers
import {
  getTasksApi,
  getTaskApi,
  createTaskApi,
  deleteTaskApi,
  updateTaskApi,
} from "./controllers/api/taskController.js";
import {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
} from "./controllers/api/categoryController.js";

// Controllers
import { createTask, handleForm } from "./controllers/tasksController.js";
import jwtAuth from "./middleware/jwtAuth.js";
//create an instance of express
const app = express();

//server static files from the public folder
//they can be accessed from the root of the site
app.use(express.static("public"));

/**
 * body parser middleware
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//---------------------------------------------Handlebars Configuration---------------------------------------------
//handlebars instance
const hbs = create({
  extname: ".hbs",
  defaultLayout: "main",
  helpers: HandlebarsHelpers,
});
// set handlebars as the view engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", VIEWS_PATH); //location of handlebars files
//---------------------------------------------End of Handlebars---------------------------------------------

//GET route to serve the index.html file
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("src", "views", "index.html"));
// });

app.post("/tasks", createTask);
app.post("/tasks/:id", handleForm);
app.post("/login", postLogin, login);
app.post("/register", postRegister, register);

app.get("/", index);
app.get("/register", register);
app.get("/login", login);
app.get("/logout", logout);
/**
 * API routes
 */
//GET
app.get("/api/tasks/:id", getTaskApi);
app.get("/api/tasks", getTasksApi);
app.get("/api/categories/:id", getCategory);
app.get("/api/categories", getCategories);
//POST
app.post("/api/tasks", createTaskApi);
app.post("/api/categories", createCategory);
//DELETE
app.delete("/api/tasks/:label", deleteTaskApi);
app.delete("/api/categories/:id", deleteCategory);
//UPDATE
app.put("/api/tasks/:label", updateTaskApi);

/**
 * TASK routes
 */

//PORT
app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
