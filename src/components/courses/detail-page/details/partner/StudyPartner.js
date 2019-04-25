import React from "react"
import styled from "styled-components"

import QnAs from "./QnAs"

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

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  padding: 1rem;
`

const Name = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`

const Content = styled.div`
  border-top: 1px solid rgb(230, 230, 230);
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  vertical-align: middle;
`

const StudyPartner = ({ partner }) => {
  const { name, image, careers, qna } = partner
  // console.log("careers: ", careers)

  return (
    <Container>
      <Title>파트너 소개</Title>
      <ThumbnailContainer>
        <img
          src={
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          }
          alt={name}
          style={{ borderRadius: "50%" }}
        />
      </ThumbnailContainer>
      <Name>{name}</Name>
      <Content>
        <div>
          {careers.map(({ career }, index) => (
            <p key={index}>{career}</p>
          ))}
        </div>
      </Content>
      {qna === null ? "" : <QnAs qna={qna} />}
    </Container>
  )
}

export default StudyPartner
