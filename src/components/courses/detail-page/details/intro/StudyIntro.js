import React from "react"
import styled from "styled-components"

import Objectives from "./Objectives"
import Targets from "./Targets"
import Details from "./Details"

import { sizes } from "../../../../../constants"

const Container = styled.div`
  background: white;
  margin-bottom: 2rem;
  padding: 3rem;
`

const Title = styled.p`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`

const Intro = styled.p`
  margin: 2rem 0;
  padding: 0 6rem;
  text-align: center;

  @media screen and (max-width: ${sizes.mobile}px) {
    padding: 0;
  }
`

const Content = styled.div`
  padding-top: 1.5rem;
`

const SubTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
`

const StudyIntro = ({ data }) => (
  <Container>
    <Title>{data.title}</Title>
    <Intro>
      {data.intro.text.split("\\n").map(line => (
        <p>{line}</p>
      ))}
    </Intro>
    <Content>
      <SubTitle>학습목표</SubTitle>
      <Objectives objectives={data.intro.objectives} />

      <SubTitle>참여대상</SubTitle>
      <Targets targets={data.intro.targets} />

      <SubTitle>상세정보</SubTitle>
      <Details info={data.info} />
    </Content>
  </Container>
)

export default StudyIntro
