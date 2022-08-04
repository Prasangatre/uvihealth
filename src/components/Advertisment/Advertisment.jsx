import React from 'react'
import styled from 'styled-components'
import iphone1 from './iPhone 121.png'
import iphone2 from './iPhone122x.png'
const MainContainer=styled.div`
display:flex;
background:white;


`
const Content =styled.div`
margin-left:190px;
flex:1;

align-self:center;
`
const ImageContainer=styled.div`
display:flex;
flex:2;
margin-left:105px;
border=2px solid red;

`
const BoldHeading =styled.div`font-family: Montserrat;
font-size: 32px;
font-weight: 700;
line-height: 40px;
letter-spacing: -1px;
text-align: left;
`
const PlainText=styled.div`
font-family: Open Sans;
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0px;
text-align: left;

`
const Image1=styled.div`height: 405.172607421875px;
width: 183.0244140625px;
left: 10.9765625px;
top: -7.172607421875px;
border-radius: 0px;
`
const Image2 =styled.div`
margin-left:35px;
`
const Advertisment = () => {
  return (
<MainContainer>
<Content>
<BoldHeading>One place for all your Thyroid needs</BoldHeading>
<PlainText>Join live fitness sessions, talk to your Nutrition Coach or consult top Thyroid Experts in India, track your Thyroid  symptoms, watch live webinars & explore Thyroid related content, videos & recipes.</PlainText>
</Content>
<ImageContainer>
<Image1>
  <img src ={iphone1} alt=""/>
</Image1>
<Image2>
  <img style={{height:408,}}src={iphone2} alt=""/>
</Image2>
</ImageContainer>



</MainContainer>
  )
}

export default Advertisment