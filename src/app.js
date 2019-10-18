import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Chana",
  //     animal: "Gato",
  //     breed: "Wallet"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Franco",
  //     animal: "Perro",
  //     breed: "Wallet"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Roberto",
  //     animal: "Canario",
  //     breed: "Wallet"
  //   })
  // ]);

  return (
    <div>
      <h1 id="something-important"> Adopt Me!</h1>
      <Pet name="Chana" animal="Gata" breed="Wallet" />
      <Pet name="Franco" animal="Perro" breed="Wallet" />
      <Pet name="Roberto" animal="Loro" breed="Wallet" />
    </div>
  );
};

// render(React.createElement(App), document.getElementById("root"));

render(<App />, document.getElementById("root"));
