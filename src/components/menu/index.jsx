import React from "react";
import styled from "styled-components";
import { HomeFilled, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./style.css";
import Logo from "../../assets/images/logow.png";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  flex: 1;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: scroll;
`;

const LogoDiv = styled.div.attrs({ className: "logo" })`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 16px;
  margin-top: 16px;
  margin-bottom: 25px;
`;

const MenuList = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const SpaceLine = styled.div`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0;
`;

const SignIn = styled.div.attrs({ className: "sign-in" })``;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      {/* logo  */}
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <LogoDiv>
          <img src={Logo} alt="logo" />
          <p>Youtubee</p>
        </LogoDiv>
      </Link>

      {/* menu  */}
      <MenuList>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <SpaceLine />
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <SpaceLine />
        <div className="sign-in">
          <p>Sign in to like videos, comment, and subscribe.</p>
          <Link
            to="/sign-in"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button>
              <UserOutlined /> Sign In
            </button>
          </Link>
        </div>
        <SpaceLine />
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <SpaceLine />
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem>
          <HomeFilled />
          <p>Home</p>
        </MenuItem>
        <MenuItem onClick={() => setDarkMode(!darkMode)}>
          <HomeFilled />
          <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
        </MenuItem>
      </MenuList>
    </Container>
  );
};

export default Menu;
