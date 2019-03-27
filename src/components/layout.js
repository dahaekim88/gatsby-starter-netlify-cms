import React from "react"
import NavBar from "./Navbar"
import "semantic-ui-css/semantic.min.css"

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)

export default Layout
