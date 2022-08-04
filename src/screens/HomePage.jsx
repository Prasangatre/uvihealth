import React from "react";
import styled from "styled-components";
import Advertisment from "../components/Advertisment/Advertisment";
import Assembly from "../components/Assembly/Assembly";
import Footer from "../components/Footer/Footer";
import GeneralFacts from "../components/GeneralFacts/GeneralFacts";
import UserDetail from "../components/Userdetails/UserDetail";

const BoldHeading1 = styled.div`
  font-family: Montserrat;
  font-size: 32px;
  background: #fff5f5;
  font-weight: 700;
  padding-top: 20px;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
`;

const HomePage = () => {
  return (
    <>
      <UserDetail />
      <GeneralFacts />
      <BoldHeading1> Your Thyroid Pre-Conditions Explained</BoldHeading1>
      <Assembly />
      <Advertisment />
      <Footer />
    </>
  );
};

export default HomePage;
