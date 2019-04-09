import React from "react"
import styled from "styled-components"

import { MarginBottomContainer } from "../../styled"
import { sizes } from "../../../constants"
import fbLogo from "../../../assets/img/footer/fb_logo.png"

const Container = styled.div`
  padding-left: 10rem;

  @media screen and (max-width: ${sizes.b_desktop}px) {
    padding-left: 8rem;
  }

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    padding-left: 0rem;
  }

  @media screen and (max-width: ${sizes.b_tablet}px) {
    text-align: center;
  }
`

const FollowLogo = styled.img`
  margin-right: 2rem;
  width: 3rem;
`

const Contact = () => (
  <Container>
    <MarginBottomContainer>
      <strong>Contact us</strong>
    </MarginBottomContainer>
    <MarginBottomContainer>
      <div>studystates@codestates.com</div>
      <div>
        <strong>Help Desk</strong> | 월~토 : 10:00 ~ 19:00
      </div>
    </MarginBottomContainer>
    <div>
      <a href="https://www.facebook.com/studystateswith/">
        <FollowLogo src={fbLogo} alt="facebook" />
      </a>
    </div>
  </Container>
)

export default Contact
