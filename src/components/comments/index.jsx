import React from "react";
import styled from "styled-components";
import Comment from "../comment";

const Container = styled.div`
  width: 100%;
`;

const AddComment = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 90%;
  padding: 5px;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
`;

const AllComment = styled.div`
  margin-top: 50px;
`;

const Comments = () => {
  return (
    <Container>
      <AddComment>
        <Img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
        <Input placeholder="Add a comment..." />
      </AddComment>
      <AllComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </AllComment>
    </Container>
  );
};

export default Comments;
