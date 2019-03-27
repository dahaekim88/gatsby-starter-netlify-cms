import React from "react"
import styled from "styled-components"

const Container = styled.span`
  font-family: Lovelo;
  font-size: 2rem;
  color: ${({ color }) => color};
  cursor: pointer;
`

const Logo = color => <Container color={color}>STUDY | STATES</Container>

export default Logo
