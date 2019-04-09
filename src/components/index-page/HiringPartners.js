import React from "react"
import styled from "styled-components"

import { Title, SubTitle } from "../styled"

const Container = styled.div`
  margin: 7rem 0;
  text-align: center;

  .image-wrapper {
    max-width: 1000px;
    display: flex;
    display: inline-block;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
  }
`

const LogoImg = styled.img`
  padding: 10px 30px 10px 30px;
`

const HiringPartners = ({ heading, subheading, partnersLogo }) => (
  <Container>
    <Title size="2.5rem">{heading}</Title>
    <SubTitle size="1.7rem">{subheading}</SubTitle>
    <div className="image-wrapper">
      {partnersLogo.map((logo, index) => (
        <LogoImg src={logo} key={index} />
      ))}
    </div>
  </Container>
)

export default HiringPartners
