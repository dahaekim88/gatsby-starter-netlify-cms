import React from "react"
import styled from "styled-components"
import { Col, Row } from "reactstrap"

import { MarginBottomContainer, StyledLink } from "../../styled"
import { sizes } from "../../../constants"

const Container = styled.div`
  @media screen and (max-width: ${sizes.b_desktop}px) {
    padding: 0 7rem;
  }

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: ${sizes.b_tablet}px) {
    text-align: center;
  }
`

const MenuContainer = styled(MarginBottomContainer)`
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Menu = () => (
  <Container>
    <Row>
      <Col xs={6}>
        <MenuContainer>
          <StyledLink to="/about" color="white">
            About
          </StyledLink>
        </MenuContainer>
      </Col>
      <Col xs={6}>
        <MenuContainer>
          <StyledLink to="/topics" color="white">
            Topics
          </StyledLink>
        </MenuContainer>
      </Col>
    </Row>
    <Row>
      <Col xs={6}>
        <MenuContainer>
          <StyledLink to="/faq" color="white">
            FAQ
          </StyledLink>
        </MenuContainer>
      </Col>
      <Col xs={6}>
        <MenuContainer
          onClick={() => {
            window.location =
              "https://www.rocketpunch.com/companies/code-states/jobs"
          }}
        >
          Apply
        </MenuContainer>
      </Col>
    </Row>
  </Container>
)

export default Menu
