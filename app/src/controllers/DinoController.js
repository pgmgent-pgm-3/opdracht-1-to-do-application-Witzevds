import { dinosaurs } from "../data/data.js";

//overzicht
export const index = (req, res) => {
  const data = {
    title: "Dinosaurs",
    dinosaurs: dinosaurs,
  };
  res.render("dinosaurs", data);
};

//detail
export const show = (req, res) => {
  res.send("Dino detail"); //placeholder
};
