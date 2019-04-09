import React from "react"
import styled from "styled-components"

import { MarginBottomContainer } from "../../styled"
import { sizes, white } from "../../../constants"
import Logo from "../../reusable/Logo"

const Container = styled.div`
  padding-right: 10rem;

  @media screen and (max-width: ${sizes.b_desktop}px) {
    padding-right: 8rem;
  }

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    padding-right: 0rem;
  }

  @media screen and (max-width: ${sizes.b_tablet}px) {
    text-align: center;
  }
`

const Text = styled.p`
  font-size: 1.4rem;
`

const CSDetails = () => (
  <Container>
    <MarginBottomContainer>
      <Logo color={white} />
    </MarginBottomContainer>
    <Text>
      Study States(스터디스테이츠)는 Peer Learning, Project Basesd Learning 을
      통해 서로 돕는 학습 커뮤니티 입니다.
    </Text>
  </Container>
)

export default CSDetails
