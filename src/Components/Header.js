import React from "react";

export default function Header(props) {
  return (
    <header>
      <h2>Eu sou {props.nome}</h2>
      <h2>Minha idade é {props.idade}</h2>
      <h2>Estou estudando {props.profissao}</h2>
      <h1>Minha comida preferida é {props.comida} </h1>
    </header>
  );
}
