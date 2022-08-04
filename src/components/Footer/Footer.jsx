import React from 'react'
import styled from 'styled-components'
const MainContainer=styled.div`
height: 274px;
width: 1519px;
justify-content: space-evenly;
    align-items: center;
background: #4B4B6D;
border-radius: 0px;
display:flex;
flex-direction:column;
`
const BoldText=styled.div`font-family: Montserrat;
font-size: 32px;
font-weight: 700;
line-height: 40px;
letter-spacing: 0.015em;
text-align: center;
color:white;
`
const Button =styled.div`height: 66px;
width: 280px;
align-items: center;
justify-content: center;
background: #F5735A;
color:white;
border-radius: 12px;
display:flex;
`
const ButtonText=styled.div`
font-family: Montserrat;
font-size: 18px;
font-weight: 600;
line-height: 26px;
letter-spacing: 0em;
text-align: center;

`
const Footer = () => {
  return (
<MainContainer>
<BoldText>Have any questions? Book a call with us</BoldText>
<Button>
    <ButtonText>
    Talk to Health Coach
</ButtonText>
</Button>

</MainContainer>
  )
}

export default Footer