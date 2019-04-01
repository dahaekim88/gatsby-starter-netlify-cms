import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { bluegray } from "../../constants"

const Container = styled.div`
  margin-bottom: 5rem;
`

const Title = styled.div`
  font-size: 2rem;
  margin-top: 25px;
  font-family: Lovelo;
  text-align: center;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 10%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Description = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
  color: ${bluegray};
  font-size: 1.6rem;
`

const WhyUsDetail = ({ title, imageUrl, children }) => (
  <Container>
    <ImageContainer>
      <img alt={`why-us-${title}`} src={imageUrl} style={{ width: "100%" }} />
    </ImageContainer>
    <Title>{title}</Title>
    <Description>{children}</Description>
  </Container>
)

export default WhyUsDetail

WhyUsDetail.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
