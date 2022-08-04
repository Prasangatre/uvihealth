import React from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BoyIcon from "@mui/icons-material/Boy";
import { HeightOutlined, MonitorWeightSharp } from "@mui/icons-material";
import weightimage from "./noun-weight.png";
import nountired from "./noun-tired.png";
import nounskin from "./noun-skin.png";
import nouncold from "./noun-cold.png";
import GlanceCards from "../Cards/GlanceCards/GlanceCards";

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #fff5f5;
`;
const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const SubBox1 = styled.div`
  height: 372px;
  width: 263px;
  left: 189px;
  top: 180px;
  background: #474863;
  margin-right: 24px;
  border-radius: 12px;
`;
const SubContentBox1 = styled.div`
  // height: 48px;
  // width: 207px;
  // left: 28px;

  margin-top: 28px;
`;
const SimpleDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubHeadingBox1 = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  vertical-align: top;
  font-style: Bold;
  text-align: center;
  color: #fff5f5;
`;
const EllipseDiv = styled.div`
  margin-top: 2px;
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
`;
const EllipseChart = styled.div`
  width: 50%;
  height: 60%;
`;
const WarningBox = styled.div`
  height: 56px;
  width: 207px;

  border-radius: 11px;
  background: white;
  margin: auto;
  width: 70%;
`;
const WarningText = styled.div`
  margin-top: 12px;
  display: flex;
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;

  text-align: center;
`;
const SubBox2 = styled.div`
  height: 372px;
  width: 771px;
  left: 480px;
  top: 180px;
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  margin-top: 28px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const UserName = styled.div``;
const ColorText = styled.div`
  color: #f5735a;
`;
const BoldText = styled.p`
  font-style: bold;
  font-weight: 500;
  font-size: 18px;
`;
const ThyroidText = styled.div`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
`;
const PlainText = styled.p``;
const Diagnosed = styled.div``;
const Button = styled.div`
  height: 32px;
  width: 206px;
  left: 986px;
  top: 221px;
  border-radius: 8px;
  padding: 8px, 24px, 8px, 24px;
  background: #373750;
`;
const ButtonText = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
`;

const Body = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const AgeImg = styled.div`
  display: flex;
  align-items: center;
`;
const HeightImg = styled.div`
  display: flex;
  align-items: center;
`;
const WeightImg = styled.div`
  display: flex;
  align-items: center;
`;
const Age = styled.div`
  display: flex;
`;
const AgeContent = styled.div``;
const Height = styled.div`
  display: flex;
`;
const HeightContent = styled.div``;
const Weight = styled.div`
  display: flex;
`;
const WeightContent = styled.div``;
const BorderVertical = styled.div``;
const SmallHeading = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
`;
const Symptoms = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;

  flex-direction: row;
  justify-content: space-evenly;
`;

const Problem1 = styled.div``;
const Problem2 = styled.div``;
const Problem3 = styled.div``;
const Problem4 = styled.div``;
const Image1s = styled.div`
  width: 20%;
`;
const Box2 = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
`;

const Box3 = styled.div``;
const UserDetail = () => {
  const percentage = 70;
  return (
    <MainContainer>
      <Box1>
        <SubBox1>
          <SubContentBox1>
            <SubHeadingBox1>Your Thyroid Severity is</SubHeadingBox1>
            <SimpleDiv>
              <EllipseDiv>
                {" "}
                <EllipseChart>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </EllipseChart>
              </EllipseDiv>
              <WarningBox>
                <WarningText>Your Thyroid Health needs attention !</WarningText>
              </WarningBox>
            </SimpleDiv>
          </SubContentBox1>
        </SubBox1>
        <SubBox2>
          <Name>
            <UserName>
              <ColorText>Name</ColorText>
              <BoldText>Mehak Malik</BoldText>
            </UserName>
            <Diagnosed>
              <PlainText>Diagonised</PlainText>
              <PlainText>3 years Ago</PlainText>
            </Diagnosed>
            <Button>
              <ButtonText>Talk to Health Coach </ButtonText>
            </Button>{" "}
          </Name>

          <Body>
            <Age>
              <AgeImg>
                <BoyIcon />
              </AgeImg>
              <AgeContent>
                <ColorText>Age</ColorText>
                <BoldText>29 Years</BoldText>
              </AgeContent>
            </Age>
            <BorderVertical></BorderVertical>
            <Height>
              <HeightImg>
                <HeightOutlined />
              </HeightImg>
              <HeightContent>
                <ColorText>Height</ColorText>
                <BoldText>169 Cm</BoldText>
              </HeightContent>
            </Height>
            <Weight>
              <WeightImg>
                <MonitorWeightSharp />
              </WeightImg>
              <WeightContent>
                <ColorText>Weight</ColorText>
                <BoldText>50 kgs</BoldText>
              </WeightContent>
            </Weight>
          </Body>
          <SmallHeading>
            <BoldText>Symptoms:</BoldText>
          </SmallHeading>
          <Symptoms>
            <Problem1>
              <Image1s>
                <img src={weightimage} alt="" />
              </Image1s>
              <PlainText>Weight Gain</PlainText>
            </Problem1>
            <Problem2>
              <Image1s>
                <img src={nountired} alt="" />
              </Image1s>
              <PlainText>Fatigue</PlainText>
            </Problem2>
            <Problem3>
              <Image1s>
                <img src={nounskin} alt="" />
              </Image1s>
              <PlainText>Dry Skin</PlainText>
            </Problem3>
            <Problem4>
              <Image1s>
                <img src={nouncold} alt="" />
              </Image1s>
              <PlainText>Sensitive to Cold</PlainText>
            </Problem4>
          </Symptoms>
        </SubBox2>
      </Box1>
      <Box2>
        <ThyroidText>Your Thyroid Pre-Conditions at a Glance</ThyroidText>
      </Box2>
      <Box3>
        <GlanceCards />
      </Box3>
    </MainContainer>
  );
};

export default UserDetail;
