import React from "react";
import styled from "styled-components";
import chromic from "./G1.svg";
import medicine from "./G2.svg";
import meta from "./G3.svg";
import stomach from "./G4.svg";
import G5 from "./G5.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TopContainer = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
`;
const MainContainer = styled.div`
  height: 370px;
  width: 250px;
  display: flex;

  flex-direction: column;
  box-sizing: border-box;

  border-radius: 5px;
`;

const ColorBackground = styled.div`
  background: #373750;
  border-radius: 10px;
  flex: 2;
  justify-content: center;
`;
const Image = styled.div`
  display: flex;
  justify-content: center;
`;
const BoldText = styled.p`
  margin-top: 20px;
  font-weight: 500;
  font-size: 28px;
  color: white;
  text-align: center;
`;
const BoldText1 = styled.div`
  margin-top: 20px;
  font-weight: 500;
  font-size: 20px;
  color: black;
  text-align: center;
`;
const CircularBar = styled.div`
  background: white;
  margin-top: 10px;
  width: 50%;
`;
const WhiteBackgroung = styled.div`
  background: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const GlanceCards = () => {
  const percentage = 75;
  return (
    <TopContainer>
      <MainContainer>
        <ColorBackground>
          <Image>
            <img src={chromic} style={{ width: 100 }} alt="" />
          </Image>
          <BoldText>Chronic Inflammation</BoldText>
        </ColorBackground>
        <WhiteBackgroung>
          <CircularBar>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </CircularBar>

          <BoldText1>Moderate</BoldText1>
        </WhiteBackgroung>
      </MainContainer>

      <MainContainer>
        <ColorBackground>
          <Image>
            <img src={stomach} style={{ width: 100 }} alt="" />
          </Image>
          <BoldText>Gut Health</BoldText>
        </ColorBackground>
        <WhiteBackgroung>
          <CircularBar>
            <CircularProgressbar value={33} text={`33%`} />
          </CircularBar>
          <BoldText1>Mild</BoldText1>
        </WhiteBackgroung>
      </MainContainer>

      <MainContainer>
        <ColorBackground>
          <Image>
            <img src={meta} style={{ width: 100 }} alt="" />
          </Image>
          <BoldText>Metabolic Stress</BoldText>
        </ColorBackground>
        <WhiteBackgroung>
          <CircularBar>
            <CircularProgressbar value={90} text={`90%`} />
          </CircularBar>
          <BoldText1>Severe</BoldText1>
        </WhiteBackgroung>
      </MainContainer>
      <MainContainer>
        <ColorBackground>
          <Image>
            <img src={medicine} style={{ width: 100 }} alt="" />
          </Image>
          <BoldText>Nutritional Deficiencies</BoldText>
        </ColorBackground>
        <WhiteBackgroung>
          <CircularBar>
            <CircularProgressbar value={57} text={`57%`} />
          </CircularBar>
          <BoldText1>Moderate</BoldText1>
        </WhiteBackgroung>
      </MainContainer>

      <MainContainer>
        <ColorBackground>
          <Image>
            <img src={G5} style={{ width: 100 }} alt="" />
          </Image>
          <BoldText>Genetics & Environment</BoldText>
        </ColorBackground>
        <WhiteBackgroung>
          <CircularBar>
            <CircularProgressbar value={58} text={`58%`} />
          </CircularBar>
          <BoldText1>Moderate</BoldText1>
        </WhiteBackgroung>
      </MainContainer>
    </TopContainer>
  );
};

export default GlanceCards;
