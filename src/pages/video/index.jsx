// import React from "react";
// import styled from "styled-components";
// import {
//   DislikeOutlined,
//   LikeOutlined,
//   ShareAltOutlined,
//   SaveOutlined,
// } from "@ant-design/icons";

// const Container = styled.div`
//   display: flex;
// `;

// const MainVideo = styled.div`
//   flex: 5;
// `;

// const Content = styled.div`
//   width: 98%;
// `;

// const Title = styled.h2`
//   width: 100%;
//   margin-top: 15px;
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 20px;
// `;

// const Details = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 10px;
//   width: 100%;
// `;

// const Infos = styled.div``;

// const Actions = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const ActionItem = styled.div`
//   margin-right: 20px;
//   cursor: pointer;
// `;

// const Channel = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const ChannelInfos = styled.div`
//   display: flex;
//   gap: 10px;
//   align-items: center;
// `;

// const ChannelDetails = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ChannelName = styled.span`
//   font-size: 16px;
//   font-weight: 600;
// `;

// const ChannelSubs = styled.span`
//   color: ${({ theme }) => theme.textSoft};
//   margin-top: 5px;
//   font-size: 12px;
// `;

// const Img = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
// `;

// const Subscribe = styled.div`
//   background-color: #cc1a00;
//   font-weight: 500;
//   color: white;
//   border: none;
//   border-radius: 3px;
//   height: max-content;
//   padding: 10px 20px;
//   cursor: pointer;
// `;

// const Description = styled.p`
//   margin-left: 60px;
//   margin-top: 20px;
//   width: 75%;
// `;

// const Recommendation = styled.div`
//   flex: 2;
// `;

// const SpaceLine = styled.div`
//   border: 0.5px solid ${({ theme }) => theme.soft};
//   margin: 25px 0;
// `;

// const Video = () => {
//   return (
//     <Container>
//       <MainVideo>
//         <Content>
//           <iframe
//             width="100%"
//             height="480px"
//             src="https://www.youtube.com/embed/95Ii4RZZGk0"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//           <Title>
//             NONSTOP 2022 LỜI THÌ THẦM CỦA ĐÁ VOL. 2 - GUCCI MANE REMIX TIKTOK
//             (VD REMIX - GUHANCCI FIX)
//           </Title>

//           <Details>
//             <Infos>136,859 views - Jul 5, 2022</Infos>

//             <Actions>
//               <ActionItem>
//                 <LikeOutlined /> 12K
//               </ActionItem>
//               <ActionItem>
//                 <DislikeOutlined /> DISLIKE
//               </ActionItem>
//               <ActionItem>
//                 <ShareAltOutlined /> SHARE
//               </ActionItem>
//               <ActionItem>
//                 <SaveOutlined /> SAVE
//               </ActionItem>
//             </Actions>
//           </Details>
//           <SpaceLine />
//           <Channel>
//             <ChannelInfos>
//               <Img src="https://images.unsplash.com/photo-1581974944026-5d6ed762f617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWRtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
//               <ChannelDetails>
//                 <ChannelName>Bay Lac Studio</ChannelName>
//                 <ChannelSubs>100M subscribers</ChannelSubs>
//               </ChannelDetails>
//             </ChannelInfos>
//             <Subscribe>SUBSCRIBE</Subscribe>
//           </Channel>
//           <Description>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
//             laborum delectus unde quaerat dolore culpa sit aliquam at. Vitae
//             facere ipsum totam ratione exercitationem. Suscipit animi
//             accusantium dolores ipsam ut.
//           </Description>
//           <SpaceLine />
//           {/* comments  */}
//         </Content>
//       </MainVideo>
//       <Recommendation>Recommendation</Recommendation>
//     </Container>
//   );
// };

// export default Video;

import React from "react";
import styled from "styled-components";
import {
  DislikeOutlined,
  LikeOutlined,
  ShareAltOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import Comments from "../../components/comments";
import Card from "../../components/card";

const Container = styled.div`
  display: flex;
`;

const MainVideo = styled.div`
  flex: 5;
`;

const Content = styled.div`
  width: 98%;
`;

const Title = styled.h2`
  width: 100%;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`;

const Infos = styled.div``;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const ActionItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChannelInfos = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChannelName = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const ChannelSubs = styled.span`
  color: ${({ theme }) => theme.textSoft};
  margin-top: 5px;
  font-size: 12px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Subscribe = styled.div`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Description = styled.p`
  margin-left: 60px;
  margin-top: 20px;
  width: 75%;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const SpaceLine = styled.div`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 25px 0;
`;

const Video = () => {
  return (
    <Container>
      <MainVideo>
        <Content>
          <iframe
            width="100%"
            height="480px"
            src="https://www.youtube.com/embed/95Ii4RZZGk0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Title>
            NONSTOP 2022 LỜI THÌ THẦM CỦA ĐÁ VOL. 2 - GUCCI MANE REMIX TIKTOK
            (VD REMIX - GUHANCCI FIX)
          </Title>

          <Details>
            <Infos>136,859 views - Jul 5, 2022</Infos>

            <Actions>
              <ActionItem>
                <LikeOutlined /> 12K
              </ActionItem>
              <ActionItem>
                <DislikeOutlined /> DISLIKE
              </ActionItem>
              <ActionItem>
                <ShareAltOutlined /> SHARE
              </ActionItem>
              <ActionItem>
                <SaveOutlined /> SAVE
              </ActionItem>
            </Actions>
          </Details>
          <SpaceLine />
          <Channel>
            <ChannelInfos>
              <Img src="https://images.unsplash.com/photo-1581974944026-5d6ed762f617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWRtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              <ChannelDetails>
                <ChannelName>Bay Lac Studio</ChannelName>
                <ChannelSubs>100M subscribers</ChannelSubs>
              </ChannelDetails>
            </ChannelInfos>
            <Subscribe>SUBSCRIBE</Subscribe>
          </Channel>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            laborum delectus unde quaerat dolore culpa sit aliquam at. Vitae
            facere ipsum totam ratione exercitationem. Suscipit animi
            accusantium dolores ipsam ut.
          </Description>
          <SpaceLine />
          <Comments />
        </Content>
      </MainVideo>
      <Recommendation>
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
        <Card type="small" />
      </Recommendation>
    </Container>
  );
};

export default Video;
