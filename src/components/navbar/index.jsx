import React from "react";
import styled from "styled-components";

import "./style.css";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: calc(25px + 16px + 16px);
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 20px;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`;

const ButtonSignIn = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlined />
        </Search>

        <ButtonSignIn>
          <UserOutlined />
          Sign In
        </ButtonSignIn>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
