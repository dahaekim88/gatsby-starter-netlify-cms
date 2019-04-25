import React from "react"
import styled from "styled-components"

import { sizes } from "../../../../../constants"

const Container = styled.div`
  padding: 2rem 0;
  display: flex;
`

const Title = styled.div`
  font-size: 16px;
  color: black;
  font-weight: bold;
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoContainer = styled.div`
  flex: 2;
`

const Description = styled.p`
  padding-top: 2rem;
  padding-right: 7rem;
  color: #000000;
  font-size: 14px;

  @media screen and (max-width: ${sizes.b_tablet}px) {
    padding-right: 2rem;
  }
`

const Information = ({ title, image, description }) => (
  <Container>
    <ImageContainer>
      <img alt={`how-to-${title}`} src={image} width="80px" height="80px" />
    </ImageContainer>
    <InfoContainer>
      <Title>| {title}</Title>
      <Description>{description}</Description>
    </InfoContainer>
  </Container>
)

export default Information
