import React from "react"
import styled from "styled-components"
import { Container, Col } from "reactstrap"

import { Background, StyledGrid, Title, BorderedButton } from "../styled"

import newStudyData from "./data/newStudyData"
import { sizes, white } from "../../constants"

const StyledCol = styled(Col)`
  padding: ${({ "data-index-number": index }) => {
    switch (index % 3) {
      case 0:
        return "0 0 0 0"
      case 1:
        return "0 0"
      case 2:
        return "0 0 0 0"
      default:
        return ""
    }
  }};

  @media screen and (max-width: ${sizes.b_desktop}px) {
    padding: ${({ "data-index-number": index }) => {
      switch (index % 3) {
        case 0:
          return "0 0 0 0"
        case 1:
          return "0 0"
        case 2:
          return "0 0 0 0"
        default:
          return ""
      }
    }};
  }

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    padding: ${({ "data-index-number": index }) => {
      switch (index) {
        case 0:
          return 0
        default:
          return "2rem 0 0 0"
      }
    }};
  }
`
const ColContainer = styled.div`
  padding: 4rem;
  background: ${white};
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;

  @media screen and (max-width: ${sizes.mobile}px) {
    padding: 2rem;
  }
`

const ImageContainer = styled.div`
  position: relative;
  padding: 1rem 0;
`

const NewStudy = () => (
  <Container>
    <Background>
      <StyledGrid>
        {newStudyData.map(
          (
            { id, stageImage, stageTitle, details, callToAction, link },
            index
          ) => (
            <StyledCol
              lg={6}
              md={12}
              sm={12}
              xs={12}
              data-index-number={index + 1}
              key={id}
            >
              <ColContainer>
                <Title size="2rem">{stageTitle}</Title>
                <ImageContainer>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <BorderedButton>{callToAction}</BorderedButton>
                    <img
                      style={{ width: "100%", marginBottom: "1em" }}
                      alt={stageTitle}
                      src={stageImage}
                    />
                  </a>
                </ImageContainer>
                {details}
              </ColContainer>
            </StyledCol>
          )
        )}
      </StyledGrid>
    </Background>
  </Container>
)

export default NewStudy
