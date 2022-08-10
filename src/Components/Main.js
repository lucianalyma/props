import React from "react";

export default function Main(props) {
  return (
    <main>
      <div>
        <h1>Minha comida favorita é {props.comida}</h1>
      </div>
    </main>
  );
}
