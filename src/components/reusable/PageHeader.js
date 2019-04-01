import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { white } from "../../constants"
import Jumbo from "./Jumbo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`

const Title = styled.h1`
  letter-spacing: 0.3rem;
  color: ${white};
  text-align: center;
  font-weight: 500;
`

const StyledHr = styled.hr`
  margin: 1rem 0;
  width: 25rem;
  border-color: ${white};
`

const PageHeader = ({ title, bgUrl, children }) => (
  <Jumbo bg={bgUrl}>
    <Container>
      <Title>{title}</Title>
      <StyledHr />
      {children}
    </Container>
  </Jumbo>
)

export default PageHeader

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  bgUrl: PropTypes.string.isRequired,
  children: PropTypes.node,
}

PageHeader.defaultProps = {
  children: "",
}
