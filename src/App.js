import React, { Component } from "react";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Card from "./Components/Card.js";
import { createGlobalStyle } from "styled-components";
import Lasanha from "./Image/lasanha.jpg";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: gray;
  }
  h1{
    color: green;
  }
  h2{
    color: yellowgreen
  }

`;

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header
          comida="Lasanha."
          nome="Luciana"
          idade={30}
          profissao="Programação."
        />

        <br />
        <br />
        <br />
        <main>
          <img src={Lasanha} alt="Lasanha" />
        </main>
        <br />
        <br />
        <br />
        <Footer></Footer>
      </>
    );
  }
}
