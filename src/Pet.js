import React from "react";

export default function Pet({ name, animal, breed }) {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed)
  // ]);
  //
  // Convertir to JSX

  return (
    <div>
      <h2>{"Nombre: " + name}</h2>
      <h2>{"Tipo: " + animal}</h2>
      <h2>{"Raza: " + breed}</h2>
    </div>
  );
}
