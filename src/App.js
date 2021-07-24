import React, { useState } from "react";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import SwitcherTema from "./Components/SwitcherTema";
import { BtnTema } from "./Components/UI";

import { temaClaro, temaEscuro } from "./Components/UI/tema";

function App() {
  const [theme, setTheme] = useState(false);

  function defineTema() {
    setTheme(!theme);
  }
  return (
    <ThemeProvider theme={theme ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={defineTema}>
        <SwitcherTema theme={theme} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
