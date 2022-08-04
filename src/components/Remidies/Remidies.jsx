import React from "react";
import styled from "styled-components";
const MainContainer = styled.div`
  background: #fff5f5;
  display: flex;
  flex-direction: column;
`;
const Box2 = styled.div`
  height: 104px;
display:flex;
  width: 1280px;
  align-items:center;
  justify-content:space-evenly;
  border-radius: 12px;
  background: #ffffff;
  align-self: center;
  margin-top: 15px;
`;
const IconImage = styled.div`
  height: 45.5px;
  width: 45.50056457519531px;
  left: 5.25px;
  top: 5.25px;
  border-radius: 0px;
`;
const Description = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const Remidies = (props) => {
  const { imagePath1, imagePath2, imagePath3, Text1, Text2, Text3 } = props;
  return (
    <MainContainer>
      <Box2>
        <IconImage>
          <img src={imagePath1} />
        </IconImage>
        <Description>{Text1}</Description>
        <IconImage>
          <img src={imagePath2} />
        </IconImage>
        <Description>{Text2}</Description>
        <IconImage>
          <img src={imagePath3} />
        </IconImage>
        <Description>{Text3}</Description>
      </Box2>
    </MainContainer>
  );
};

export default Remidies;
