import React from "react"
import styled from "styled-components"
import { Col } from "reactstrap"
import { sizes } from "../../../../../constants"

const Container = styled.div`
  padding: 2rem 4rem 2rem 0;
  display: flex;
`

const Title = styled.div`
  font-size: 16px;
  color: black;
  font-weight: bold;
`

const ImageContainer = styled(Col)`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  width: 40%;

  @media screen and (max-width: ${sizes.b_tablet}px) {
    width: 100%;
  }
`

const InfoContainer = styled(Col)``

const Description = styled.p`
  margin-top: 2rem;
  color: #000000;
  font-size: 14px;
`

const Information = ({ title, image, description }) => (
  <Container>
    <ImageContainer sm={5}>
      <img alt={`how-to-${title}`} src={image} />
    </ImageContainer>
    <InfoContainer sm={7}>
      <Title>| {title}</Title>
      <Description>{description}</Description>
    </InfoContainer>
  </Container>
)

export default Information
