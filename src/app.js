import express from "express";
const app = express();

const port = 3000;

app.use(express.static("public"));
app.get("/Hello", (req, res) => {});
app.listen(port, () => {
  console.log(`server started ${port}`);
});
