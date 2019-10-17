const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
