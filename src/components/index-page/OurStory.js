import React from "react"
import { Container } from "reactstrap"

import StageStep from "./StageStep"
import {
  Background,
  Title,
  SubTitle,
  SubStrongTitle,
  StyledGrid,
  StyledCol,
} from "../reusable/styledComponents"

import HowTo from "./HowTo"

import studyStageData from "./data/studyStageData"

const OurStory = () => (
  <Container>
    <Background>
      <Title size="3rem">Study | States</Title>
      <SubTitle size="1.8rem">
        “스터디스테이츠는{" "}
        <SubStrongTitle>학습하기, 공유하기, 적용하기</SubStrongTitle>
        <br /> 세 단계로 스터디를 진행합니다.”
      </SubTitle>

      <StyledGrid top="4rem" bottom="0">
        {studyStageData.map(
          ({ id, stageImage, stageTitle, details }, index) => (
            <StyledCol
              lg={4}
              md={10}
              sm={12}
              xs={12}
              key={id}
              data-index-number={index}
            >
              <StageStep
                stageImage={stageImage}
                stageTitle={stageTitle}
                stageContent={details}
              >
                {details}
              </StageStep>
            </StyledCol>
          )
        )}
      </StyledGrid>
      <StyledGrid>
        <StyledCol>
          <HowTo />
        </StyledCol>
      </StyledGrid>
    </Background>
  </Container>
)

export default OurStory
