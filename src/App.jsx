import React from "react";
import { createRoot } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Kitsune",
      breed: "Husky",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Fern",
      breed: "American Shorthair",
    }),
    React.createElement(Pet, {
      animal: "Axolotl",
      name: "Potato",
      breed: "Leucistic",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
