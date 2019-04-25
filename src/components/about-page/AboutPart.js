import React, { Fragment } from "react"
import styled from "styled-components"

import { PagePart, SmallTitle, Paragraph } from "../styled"
import PageDetails from "../reusable/PageDetails"

const Image = styled.img`
  width: 100%;
  margin-top: 2rem;
`

const AboutPart = ({ heading, image, description }) => {
  const textWithLineBreak = description.split("\\n").map((line, i) => (
    <Fragment key={i}>
      {line}
      <br />
    </Fragment>
  ))

  return (
    <PagePart>
      <PageDetails>
        <SmallTitle>{heading}</SmallTitle>
        <Image alt="학습 커뮤니티" src={image} />
        <Paragraph>{textWithLineBreak}</Paragraph>
      </PageDetails>
    </PagePart>
  )
}

export default AboutPart
