import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import "./App.css";
import Menu from "./components/menu";
import NavBar from "./components/navbar";
import { darkTheme, lightTheme } from "./utils/Theme.js";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        {/* menu  */}
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* main content  */}
        <Main>
          {/* navbar  */}
          <NavBar />

          {/* cards  */}
          <Wrapper>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
