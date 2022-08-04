import React from "react";
import styled from "styled-components";
// import image1 from "./image1.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const MainContainer = styled.div`
  background: #fff5f5;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ImageBox = styled.div`
  height: 274px;
  width: 379px;
  left: 80px;
  top: 1847px;
  border-radius: 12px;
  background: #ffe6e1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const ImageStyle = styled.img`
  height: 258px;
  width: 258px;
  left: 141px;
  top: 3265px;
  border-radius: 0px;
`;
const DescriptionBox = styled.div`
  height: 274px;
  margin-left: 28px;
  width: 873px;
  display: flex;
  border-radius: 12px;
  background: #ffffff;
`;
const DescriptionText = styled.div`
  margin-top: 18px;
  margin-left: 20px;
  flex: 1;
`;

const CircularContainer = styled.div`
  height: 226px;
  width: 217px;
  margin-left: 15px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 12px;
  background: #f7f7f8;
`;

const CircularStyling = styled.div`
  width: 55%;
`;
const CircluarText = styled.div`
  font-family: Open Sans;
  margin-top: 5px;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
`;
const BoldHeading2 = styled.div`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
`;
const PlainText = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
`;

const DescriptionCards = (props) => {
  const { imagePath, boldheading, description, percentage, circulartext } =
    props;
  // console.log(imagePath,boldheading,description,percentage,circulartext)

  return (
    <MainContainer>
      <ContentBox>
        <ImageBox>
          <ImageStyle img src={imagePath} />
        </ImageBox>
        <DescriptionBox>
          <CircularContainer>
            <CircularStyling>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </CircularStyling>
            <CircluarText>{circulartext}</CircluarText>
          </CircularContainer>
          <DescriptionText>
            <BoldHeading2>{boldheading}</BoldHeading2>
            <PlainText>{description}</PlainText>
          </DescriptionText>
        </DescriptionBox>
      </ContentBox>
    </MainContainer>
  );
};

export default DescriptionCards;
