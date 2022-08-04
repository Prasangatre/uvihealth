import React from "react";
import styled from "styled-components";
import image from "./Thyroid.svg";
// import vector from'./Vector (2).jpg'
const MainContainer = styled.div`
  display: flex;

  justify-content: space-around;
  background: white;
  margin-top: 28px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-left: 30px;
`;

const ImageHolder = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 494px;
  left: 866px;
  top: 1114px;
  border-radius: 12px;
  background: #f5e7de;
  height: 501px;
`;
const Rectangle = styled.div``;
const BoldHeading = styled.div`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
`;
const Points = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0.015em;
  text-align: left;
`;
const PlainText = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-around;
`;
const Button1 = styled.button`
  height: 66px;
  width: 266px;
  left: 80px;
  top: 1519px;
  border-radius: 12px;
  padding: 20px, 32px, 20px, 32px;
  background: #f5735a;
`;

const Button2 = styled.button`
  height: 66px;
  width: 281px;
  border-radius: 12px;
  padding: 20px, 32px, 20px, 32px;
  background: #373750;
`;
const ButtonText = styled.div`
  font-size: 15px;
  color: white;
  text-align: center;
  font-weight: 700;
`;

const GeneralFacts = () => {
  return (
    <MainContainer>
      <Content>
        <BoldHeading>
          95% Hypothyroidism is caused by one of the three underlying factor
        </BoldHeading>

        <PlainText>
          <Points>1.Hashimoto's</Points>
          <Points>2.HPA Axis Dysfunction</Points>
          <Points>3.Estrogen Excess</Points>
        </PlainText>

        <PlainText>
          {" "}
          These root cause are treatable.Book a thyroid root cause panel to find
          your clinicial root causse and begin personalised treatment.
        </PlainText>
        <ButtonGroup>
          <Button1>
            <ButtonText>Consult Health Coach</ButtonText>
          </Button1>
          <Button2>
            <ButtonText>Book Root Cause Panel</ButtonText>
          </Button2>
        </ButtonGroup>
      </Content>

      <ImageHolder>
        <Rectangle>
          {" "}
          <img style={{}} src={image} alt="" />
          {/* <img src={vector}/> */}
        </Rectangle>
      </ImageHolder>
    </MainContainer>
  );
};

export default GeneralFacts;
