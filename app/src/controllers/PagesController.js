export const home = (req, res) => {
  const data = {
    title: "ID",
    navItem,
    names: ["John", "Jane", "Doe"],
    hobbies: ["Reading", "Coding", "Gaming", "Singing"],
    person: {
      firstname: "Witze",
      lastname: "Van der Straeten",
      location: {
        city: "Asse",
        country: "Belgium",
      },
    },
  };
  res.render("home", data);
};

export const dinosaurs = (req, res) => {
  const dinos = [
    { name: "T-rex", color: "Blue", image: "logo 2.png" },
    { name: "Stego", color: "Green", image: "Edit Cover.svg" },
    { name: "Raptor", color: "Black", image: "Check Vector Icon.svg" },
  ];
  const data = {
    dinosaurs: dinos,
  };
  res.render("dinosaurs", data);
};
