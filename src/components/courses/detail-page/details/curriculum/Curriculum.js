import React from "react"
import styled from "styled-components"

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

const SubTitle = styled.p`
  margin: 3rem 0;
  text-align: center;
`

const Content = styled.div`
  border-top: 1px solid rgb(230, 230, 230);
  padding: 3rem 0;
`

const Curriculum = ({ curriculum }) => (
  <Container>
    <Title>커리큘럼</Title>
    <SubTitle>
      {curriculum.intro}
      <br />
      커리큘럼은 스터디원의 요구나 학습 진행 속도에 따라 변경될 수 있습니다.
    </SubTitle>
    <br />
    {curriculum.weeklyTopics.map((topic, index) => (
      <Content key={index}>
        <p style={{ fontSize: "1.7rem" }}>
          <b># Session {index + 1}</b>
        </p>
        {topic.split("\\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </Content>
    ))}
  </Container>
)

export default Curriculum
