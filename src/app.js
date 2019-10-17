import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Chana",
      animal: "Gato",
      breed: "Wallet"
    }),
    React.createElement(Pet, {
      name: "Franco",
      animal: "Perro",
      breed: "Wallet"
    }),
    React.createElement(Pet, {
      name: "Roberto",
      animal: "Canario",
      breed: "Wallet"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
