import React from "react"
import styled from "styled-components"

import { Title, SubTitle } from "../reusable/styledComponents"
import partnersLogo from "./data/partnersData.js"

const Container = styled.div`
  margin: 7rem 0;
  text-align: center;

  .image-wrapper {
    max-width: 1000px;
    display: flex;
    display: inline-block;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
  }
`

const LogoImg = styled.img`
  padding: 10px 30px 10px 30px;
`

const HiringPartners = () => (
  <Container>
    <Title size="2.5rem">Hiring Partners</Title>
    <SubTitle size="1.7rem">
      소프트웨어 인력 채용을 위해 코드스테이츠와 채용 파트너십을 체결한
      기업들입니다.
    </SubTitle>
    <div className="image-wrapper">
      {partnersLogo.map(logo => (
        <LogoImg src={logo} />
      ))}
    </div>
  </Container>
)

export default HiringPartners
