import React from "react";
import styled from "styled-components";

import "./style.css";

const Container = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

const NavBar = () => {
  return <Container>NavBar</Container>;
};

export default NavBar;
