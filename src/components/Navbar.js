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

import Logo from "./reusable/Logo"
import { isLoggedIn, logout } from "../services/auth"
import { logoColor } from "../constants"

const StyledLink = styled(Link)`
  color: ${logoColor};
  text-decoration: none;
  &:hover {
    color: ${logoColor}
    text-decoration: none;
  }
`

export default () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <Navbar color="white" light expand="md">
        <Container>
          <NavbarBrand>
            <StyledLink to="/">
              <Logo color={logoColor} />
            </StyledLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  ABOUT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/topics">
                  TOPICS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/blog">
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">
                  APPLY
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i className="fa fa-user-circle" />
                </DropdownToggle>
                {isLoggedIn() ? (
                  <DropdownMenu right>
                    <DropdownItem tag={Link} to="profile">
                      마이페이지
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
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
                    </DropdownItem>
                  </DropdownMenu>
                ) : (
                  <DropdownMenu right>
                    <DropdownItem tag={Link} to="login">
                      회원가입
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={Link} to="login">
                      로그인
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

// const Navbar = class extends React.Component {
//   componentDidMount() {
//     // Get all "navbar-burger" elements
//     const $navbarBurgers = Array.prototype.slice.call(
//       document.querySelectorAll(".navbar-burger"),
//       0
//     )
//     // Check if there are any navbar burgers
//     if ($navbarBurgers.length > 0) {
//       // Add a click event on each of them
//       $navbarBurgers.forEach(el => {
//         el.addEventListener("click", () => {
//           // Get the target from the "data-target" attribute
//           const target = el.dataset.target
//           const $target = document.getElementById(target)

//           // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//           el.classList.toggle("is-active")
//           $target.classList.toggle("is-active")
//         })
//       })
//     }
//   }

//   render() {
//     return (
//       <nav
//         className="navbar is-transparent"
//         role="navigation"
//         aria-label="main-navigation"
//       >
//         <div className="container">
//           <div className="navbar-brand">
//             <Link to="/" className="navbar-item" title="Logo">
//               {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
//               <Logo />
//             </Link>
//             {/* Hamburger menu */}
//             <div className="navbar-burger burger" data-target="navMenu">
//               <span />
//               <span />
//               <span />
//             </div>
//           </div>
//           <div id="navMenu" className="navbar-menu">
//             <div className="navbar-start has-text-centered">
//               <Link className="navbar-item" to="/about">
//                 ABOUT
//               </Link>
//               <Link className="navbar-item" to="/topics">
//                 TOPICS
//               </Link>
//               <Link className="navbar-item" to="/blog">
//                 Blog
//               </Link>
//               <Link className="navbar-item" to="/contact">
//                 Contact
//               </Link>
//               {/* <Link className="navbar-item" to="/contact/examples">
// 								Form Examples
// 							</Link> */}
//             </div>
//             <div className="navbar-end has-text-centered">
//               <a
//                 className="navbar-item"
//                 href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i className="fa fa-user-circle" />
//                 {/* <span className="icon">
// 									<img src={github} alt="Github" />
// 								</span> */}
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     )
//   }
// }

// export default Navbar
