import React from "react"
import styled from "styled-components"

import { blue } from "../../../../../constants"

const BoldText = styled.div`
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: bold;
  color: ${blue};
`

const PlainText = styled.p`
  padding-bottom: 1.5rem;
  line-height: 2.5rem;
`

const Targets = ({ targets }) =>
  targets.map(({ title, content }) => (
    <div>
      <BoldText>
        <i className="fa fa-check-square-o" />
        {title}
      </BoldText>
      <PlainText>{content}</PlainText>
    </div>
  ))

export default Targets
