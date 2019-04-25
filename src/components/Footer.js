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

  @media screen and (max-width: ${sizes.b_tablet}px) {
    flex-direction: column;
    width: 100%;
  }
`

const ResponsiveHr = styled.hr`
  background-color: #fff;
  width: 80%;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: ${sizes.b_tablet}px) {
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
      <Col md={4} sm={12}>
        <SSDetails />
      </Col>

      <MarginTopResponsiveHr />

      <Col md={4} sm={12}>
        <Menu />
      </Col>

      <ResponsiveHr />

      <Col md={4} sm={12}>
        <Contact />
      </Col>
    </PaddingGrid>

    <ResponsiveHr />

    <PaddingGrid>
      <Col sm={12}>
        <Copyright />
      </Col>
    </PaddingGrid>
  </FooterContainer>
)

export default Footer
