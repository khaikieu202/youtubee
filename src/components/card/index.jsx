// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const Container = styled.div`
//   width: 270px;
//   cursor: pointer;
//   margin-bottom: 45px;
// `;

// const Img = styled.img`
//   width: 100%;
//   height: 150px;
//   object-fit: cover;
// `;

// const Details = styled.div`
//   display: flex;
//   gap: 10px;
//   padding-top: 10px;
// `;

// const ChannelImg = styled.img`
//   width: 36px;
//   height: 36px;
//   object-fit: cover;
//   border-radius: 50%;
// `;

// const Texts = styled.div``;

// const Title = styled.h2`
//   font-size: 16px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text};
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const ChannelName = styled.p`
//   font-size: 14px;
//   margin-top: 5px;
//   color: ${({ theme }) => theme.textSoft};
// `;

// const ViewsCount = styled.span`
//   font-size: 12px;
// `;

// const DateRelease = styled.span`
//   font-size: 10px;
// `;

// const CircleSmall = styled.div`
//   width: 3px;
//   height: 3px;
//   border-radius: 50%;
//   background-color: #000;
//   display: inline-block;
// `;

// const Card = () => {
//   return (
//     <Link to="video/test" style={{ textDecoration: "none", color: "inherit" }}>
//       <Container>
//         <Img src="https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80" />
//         <Details>
//           <ChannelImg src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
//           <Texts>
//             <Title>Developer get 1000000 dolars per year</Title>
//             <ChannelName>Frontend Developer</ChannelName>
//             <ViewsCount>1 view - </ViewsCount>
//             <DateRelease>1 month ago</DateRelease>
//           </Texts>
//         </Details>
//       </Container>
//     </Link>
//   );
// };

// export default Card;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => (props.type === "small" ? "100%" : "270px")};
  cursor: pointer;
  margin-bottom: ${(props) => (props.type === "small" ? "10px" : "45px")};
  display: ${(props) => props.type === "small" && "flex"};
  gap: ${(props) => props.type === "small" && "10px"};
`;

const Img = styled.img`
  width: ${(props) => (props.type === "small" ? "80%" : "100%")};
  height: ${(props) => (props.type === "small" ? "80px" : "150px")};
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  gap: 10px;
  padding-top: ${(props) => props.type !== "small" && "10px"};
`;

const ChannelImg = styled.img`
  display: ${(props) => props.type === "small" && "none"};
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
`;

const Texts = styled.div``;

const Title = styled.h2`
  font-size: ${(props) => (props.type === "small" ? "12px" : "16px")};
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChannelName = styled.p`
  font-size: ${(props) => (props.type === "small" ? "10px" : "14px")};
  margin-top: 5px;
  color: ${({ theme }) => theme.textSoft};
`;

const ViewsCount = styled.span`
  font-size: ${(props) => (props.type === "small" ? "8px" : "10px")};
`;

const DateRelease = styled.span`
  font-size: ${(props) => (props.type === "small" ? "8px" : "10px")};
`;

const CircleSmall = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #000;
  display: inline-block;
`;

const Card = ({ type }) => {
  return (
    <Link to="video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container type={type}>
        <Img
          type={type}
          src="https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80"
        />
        <Details type={type}>
          <ChannelImg
            type={type}
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <Texts>
            <Title type={type}>Developer get 1000000 dolars per year</Title>
            <ChannelName type={type}>Frontend Developer</ChannelName>
            <ViewsCount type={type}>1 view - </ViewsCount>
            <DateRelease type={type}>1 month ago</DateRelease>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
