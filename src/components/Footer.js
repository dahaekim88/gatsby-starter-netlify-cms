import React from "react"
import styled from "styled-components"
import { Col, Container } from "reactstrap"

import SSDetails from "./layout/footer/SSDetails"
import Menu from "./layout/footer/Menu"
import Contact from "./layout/footer/Contact"
import Copyright from "./layout/footer/Copyright"
import { sizes } from "../constants"

const FooterContainer = styled.div`
  background: #242526;
  color: #fff;
  font-weight: 100;
`

const PaddingGrid = styled(Container)`
  padding: 3rem 0;
  display: flex;

  @media screen and (max-width: ${sizes.mobile}px) {
    flex-direction: column;
  }
`

const ResponsiveHr = styled.hr`
  color: white;
  opacity: 0;
  width: 0;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: ${sizes.b_tablet}px) {
    opacity: 1;
    width: 80%;
    margin-bottom: 2rem;
  }
`

const MarginTopResponsiveHr = styled(ResponsiveHr)`
  @media screen and (max-width: ${sizes.b_tablet}px) {
    margin-top: 2rem;
  }
`

const Footer = () => (
  <FooterContainer>
    <PaddingGrid>
      <Col sm={4}>
        <SSDetails />
      </Col>

      <MarginTopResponsiveHr />

      <Col sm={4}>
        <Menu />
      </Col>

      <ResponsiveHr />

      <Col sm={4}>
        <Contact />
      </Col>
    </PaddingGrid>

    <hr />

    <PaddingGrid>
      <Col sm={12}>
        <Copyright />
      </Col>
    </PaddingGrid>
  </FooterContainer>
)

export default Footer
