//import statements
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { create } from "express-handlebars";
import { PORT, VIEWS_PATH } from "./constants.js";
import { home } from "./controllers/PagesController.js";

//create an instance of express
const app = express();

//server static files from the public folder
//they can be accessed from the root of the site
app.use(express.static("public"));

//---------------------------------------------Handlebars Configuration---------------------------------------------
//handlebars instance
const hbs = create({
  extname: ".hbs",
  defaultLayout: "main",
});
// set handlebars as the view engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", VIEWS_PATH); //location of handlebars files
//---------------------------------------------End of Handlebars---------------------------------------------

//GET route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.resolve("src", "views", "index.html"));
});
app.get("/thisisatest", home);

//start the server on port
app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
