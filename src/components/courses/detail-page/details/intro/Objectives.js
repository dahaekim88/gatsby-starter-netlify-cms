import React from "react"
import styled from "styled-components"

import { sizes } from "../../../../../constants"

const ParentContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${sizes.b_tablet}px) {
    flex-direction: column;
  }
`
const ChildContainer = styled.div`
  width: 33.3%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 1.5rem;
  @media screen and (max-width: ${sizes.b_tablet}px) {
    width: 100%;
  }
`
const ImageContainer = styled.div`
  width: 100px;
`
const TextContainer = styled.div`
  padding: 2rem 0;
  font-size: 1.5rem;
`

const Objectives = ({ objectives }) => (
  <ParentContainer>
    {objectives.map(({ image, text }) => (
      <ChildContainer>
        <ImageContainer>
          <img
            src={
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            }
            width="100px"
          />
        </ImageContainer>
        <TextContainer>{text}</TextContainer>
      </ChildContainer>
    ))}
  </ParentContainer>
)

export default Objectives
