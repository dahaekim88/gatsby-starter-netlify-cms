import React from "react"
import styled from "styled-components"

import { darkwhite, blue, sizes } from "../../../../../constants"

const GrayBackground = styled.div`
  background-color: ${darkwhite};
  margin-top: 3rem;
  padding: 2rem 5rem;

  @media screen and (max-width: ${sizes.mobile}px) {
    padding: 2rem;
  }
`

const BoldText = styled.p`
  margin: 1.5rem 0 1rem 0;
  font-weight: bold;
  color: ${blue};
`

const PlainText = styled.p`
  padding-bottom: 1.5rem;
  line-height: 2.5rem;
`

const QnAs = ({ qna }) => (
  <GrayBackground>
    {qna.map(({ Q, A }, index) => (
      <div key={index}>
        <BoldText>{Q}</BoldText>
        <PlainText>{A}</PlainText>
      </div>
    ))}
  </GrayBackground>
)

export default QnAs
