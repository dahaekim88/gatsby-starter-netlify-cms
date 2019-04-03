import React from "react"
import styled from "styled-components"
import { Col } from "reactstrap"

import Information from "./Information"

import { sizes } from "../../../../../constants"
import data from "../../../../index-page/data/howtoData"

const Container = styled.div`
  background: white;
  margin-top: 2rem;
  padding: 3rem;
`

const Title = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`

const Content = styled.div`
  margin: 3rem 0;
  text-align: center;
`

const StyledHr = styled.hr`
  width: 100%;
  margin: 3rem 0;
`

const StyledGrid = styled(Col)`
  width: 100%;
  padding: 0;
`

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
  @media screen and (max-width: ${sizes.b_tablet}px) {
    padding: 0;
  }
`

const StudyStage = () => (
  <Container>
    <Title>스터디 진행</Title>
    <Content>
      <p>자기주도적으로 학습하고, 발표를 통해 공유합니다.</p>
      <p>학습한 내용을 프로젝트에 적용하며 익힙니다.</p>
    </Content>
    <StyledHr />
    <StyledGrid>
      {data.map(({ title, image, description }, index) => (
        <StyledCol
          sm={12}
          key={`how-to-col-${title}-${index * 10}`}
          data-index-number={index}
        >
          <Information title={title} image={image} description={description} />
        </StyledCol>
      ))}
    </StyledGrid>
  </Container>
)

export default StudyStage
