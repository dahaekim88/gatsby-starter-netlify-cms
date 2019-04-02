import React from "react"
import styled from "styled-components"

import { sizes, white } from "../../../constants"
import chromeIcon from "../../../assets/img/footer/chrome-icon.png"

const Container = styled.div`
  font-size: 1.4rem;
  text-align: left;
  word-break: keep-all;

  @media screen and (max-width: ${sizes.b_tablet}px) {
    text-align: center;
  }
`

const Hyperlink = styled.a`
  color: ${white};
  font-weight: 500;

  &:hover {
    color: ${white};
  }
`

const UseChrome = styled.p`
  text-align: right;

  @media screen and (max-width: ${sizes.b_tablet}px) {
    text-align: center;
  }
`

const ChromeIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`

const Copyright = () => (
  <Container>
    상호명: 주식회사 코드스테이츠 | 사업자번호: 703-88-00878 | 대표자명: 김인기
    | 계좌번호: 국민은행 414301-01-155888 주식회사 코드스테이츠
    <br />
    사업장주소: 서울특별시 성동구 아차산로 68, 6층
    <br />
    <Hyperlink href="http://bit.ly/2RTyGGE">
      개인정보취급방침 & 이용약관
    </Hyperlink>
    <br />
    <strong>Copyright © 2017. Code States</strong>
    <br />
    <UseChrome>
      <ChromeIcon alt="chrome" src={chromeIcon} width="20" height="20" />
      <strong> 스터디스테이츠 사이트는 구글 크롬에 최적화 되어있습니다.</strong>
    </UseChrome>
  </Container>
)

export default Copyright
