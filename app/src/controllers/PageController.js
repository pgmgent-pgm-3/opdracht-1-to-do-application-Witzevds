//overzicht
export const index = (req, res) => {
  res.render("pages/index");
};

//detail
export const show = (req, res) => {
  const slug = req.params.slug;

  res.render("pages/houseHold");
};
export const categories = (req, res) => {
  res.render("pages/categories");
};
