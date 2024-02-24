import { dinosaurs, navItem } from "../data/data.js";

//overzicht
export const index = (req, res) => {
  const data = {
    title: "Dinosaurs",
    dinosaurs: dinosaurs,
    navItem,
  };
  res.render("dinos/index", data);
};

//detail
export const show = (req, res) => {
  const slug = req.params.slug;
  //send description
  const dino = dinosaurs.find((dino) => dino.slug === slug);
  if (!dino) {
    res.status(404).send("404");
    return;
  }

  //render detail template with dino data
  res.render("dinos/show", dino);
};
