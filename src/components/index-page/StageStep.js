import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { sizes } from "../../constants"

const Container = styled.div`
  height: 45rem;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${sizes.mobile}px) {
    padding: 2rem;
  }
`

const ImageContainer = styled.div`
  background-color: rgb(250, 250, 250);
  border: 2px solid rgb(230, 230, 230);
  border-radius: 4px;
  height: 20rem;
  display: flex;
  justify-content: center;
  vertical-align: middle;

  width: 100%;
`

const StageTitle = styled.p`
  margin-top: 2.5rem;
  font-size: 2.5rem;
  font-family: Lovelo;
  text-align: center;
  width: 100%;
`

const StageContent = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  word-break: keep-all;

  @media screen and (max-width: ${sizes.mobile}px) {
    font-size: 1.8rem;
  }
`

const StageStep = ({ stageImage, stageTitle, stageContent }) => (
  <Container>
    <ImageContainer>
      <img alt={stageTitle} src={stageImage} style={{ width: "130px" }} />
    </ImageContainer>
    <StageTitle>{stageTitle}</StageTitle>
    <StageContent>{stageContent}</StageContent>
  </Container>
)

export default StageStep

StageStep.propTypes = {
  stageImage: PropTypes.string.isRequired,
  stageTitle: PropTypes.string.isRequired,
}
