import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Jumbotron } from "reactstrap"

const Jumbo = ({ bg, padding, brightness, children }) => {
  const Container = styled(Jumbotron)`
    border-radius: 0 !important;
    margin: 0;
    padding: 0 !important;
    position: relative;
    z-index: 1;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${bg}) center;
      background-size: cover;
      content: "";
      filter: ${brightness ? `brightness(${brightness}%)` : ""};
      z-index: -1;
    }
  `

  const PaddingDiv = styled.div`
    padding: ${padding};
  `

  return (
    <Container>
      <PaddingDiv>{children}</PaddingDiv>
    </Container>
  )
}

export default Jumbo

Jumbo.propTypes = {
  bg: PropTypes.string.isRequired,
  padding: PropTypes.string,
  brightness: PropTypes.number,
  children: PropTypes.node,
}

Jumbo.defaultProps = {
  padding: "3rem",
  brightness: 0,
  children: "",
}
