import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Content = styled.div``;

const UserName = styled.h2`
  font-size: 13px;
  font-weight: 600;
`;

const DateComment = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  font-weight: 400;
`;

const MainComment = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

const Comment = () => {
  return (
    <Container>
      <Img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
      <Content>
        <UserName>
          Lucy Dev <DateComment>1 day ago</DateComment>{" "}
        </UserName>
        <MainComment>Amazing!!!</MainComment>
      </Content>
    </Container>
  );
};

export default Comment;
