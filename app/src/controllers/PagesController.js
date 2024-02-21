export const home = (req, res) => {
  const data = {
    title: "Welcome to the data driven homePage",
    message: "This is a test",
    names: ["John", "Jane", "Doe"],
    hobbies: ["Reading", "Coding", "Gaming", "Singing"],
  };
  res.render("home", data);
};
