import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import { StyledLink } from "./reusable/styledComponents"
import Logo from "./reusable/Logo"
import { isLoggedIn, logout } from "../services/auth"
import { logoColor } from "../constants"
import AvatarComp from "./AvatarComp"

const StyledNavLink = styled(NavLink)`
  font-size: 1.5rem;
  margin-right: 1rem;
`

const StyledDropdown = styled(DropdownItem)`
  font-size: 1.2rem;
`
export default () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Navbar color="white" light expand="md" style={{ height: "72px" }}>
        <Container>
          <NavbarBrand>
            <StyledLink to="/" color={logoColor}>
              <Logo color={logoColor} />
            </StyledLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <StyledNavLink tag={Link} to="/about">
                  ABOUT
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink tag={Link} to="/topics">
                  TOPICS
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink tag={Link} to="/faq">
                  FAQ
                </StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink tag={Link} to="/contact">
                  APPLY
                </StyledNavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <AvatarComp isLoggedIn={isLoggedIn} />
                </DropdownToggle>
                {isLoggedIn() ? (
                  <DropdownMenu right>
                    <StyledDropdown tag={Link} to="profile">
                      마이페이지
                    </StyledDropdown>
                    <DropdownItem divider />
                    <StyledDropdown>
                      <a
                        href="/"
                        onClick={event => {
                          event.preventDefault()
                          logout(() => navigate(`/login`))
                        }}
                        style={{
                          color: "#212529",
                          textDecoration: "none",
                        }}
                      >
                        로그아웃
                      </a>
                    </StyledDropdown>
                  </DropdownMenu>
                ) : (
                  <DropdownMenu right>
                    <StyledDropdown tag={Link} to="signup">
                      회원가입
                    </StyledDropdown>
                    <DropdownItem divider />
                    <StyledDropdown tag={Link} to="login">
                      로그인
                    </StyledDropdown>
                  </DropdownMenu>
                )}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}
