import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container } from "reactstrap"

import Jumbo from "../reusable/Jumbo"
import { HoveredButton } from "../reusable/styledComponents"
import bg from "../../assets/img/index/promotionImage.jpg"

const BigText = styled.p`
  margin-top: 3rem;
  font-weight: 300 !important;
  font-size: 3.8rem !important;
`

const SmallText = styled(BigText)`
  font-size: 1.6rem !important;
`

const LinkButton = HoveredButton.withComponent(Link)

const PromotionMessage = () => (
  <Jumbo bg={bg}>
    <Container>
      <BigText>
        스터디스테이츠
        <br />
        커뮤니티와 함께하세요.
      </BigText>
      <SmallText>
        데이터분석, 머신러닝, 디지털마케팅
        <br />
        프로덕트매니지먼트, 창업, 블록체인까지!
        <br />
        기초부터 체계적인 스터디에 참여하세요.
      </SmallText>
      <LinkButton to="/topics" width="13rem" size="1.2rem">
        전체 스터디 확인하기 &gt;
      </LinkButton>
    </Container>
  </Jumbo>
)

export default PromotionMessage
