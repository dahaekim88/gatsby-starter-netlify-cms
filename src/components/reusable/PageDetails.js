import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Col } from "reactstrap"

import { darkgray } from "../../constants"

const SmallPageName = styled.p`
  color: ${darkgray};
  opacity: 0.6;
  font-size: 1.2rem;
  font-weight: bold;
`

const PageDetails = ({ title, children, padding, sm }) => {
  const Container = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: ${padding};
    word-break: keep-all;
  `

  return (
    <Container>
      <Col sm={sm}>
        <SmallPageName>{title}</SmallPageName>
        {children}
      </Col>
    </Container>
  )
}

export default PageDetails

PageDetails.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  sm: PropTypes.number,
}

PageDetails.defaultProps = {
  title: "",
  padding: "5rem 0",
  sm: 7,
}
