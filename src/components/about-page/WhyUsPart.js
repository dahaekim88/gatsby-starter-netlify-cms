import React from "react"
import styled from "styled-components"
import { Col, Row } from "reactstrap"

import { PagePart, SmallTitle } from "../reusable/styledComponents"
import PageDetails from "../reusable/PageDetails"
import WhyUsDetail from "../reusable/DetailWithImage"
import { sizes } from "../../constants"

const StyledGrid = styled(Col)`
  padding-bottom: 5rem;
`

const StyledRow = styled(Row)``

const StyledCol = styled(Col)`
  padding: 0 2rem 0 2rem;

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: ${sizes.b_tablet}px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    padding: 0 4rem;
  }
`

const Contents = styled.div`
  line-height: 180%;
`

const WhyUsPart = ({ title, whyUsData }) => (
  <PagePart>
    <PageDetails>
      <SmallTitle>{title}</SmallTitle>
    </PageDetails>
    <StyledGrid>
      <StyledRow>
        {whyUsData.map(({ title, image, text }, index) => (
          <StyledCol
            md={4}
            sm={6}
            xs={12}
            key={`why-us-col-${title}-${index * 10}`}
            // data-index-number={index}
          >
            <WhyUsDetail
              title={title}
              imageUrl={
                !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image
              }
            >
              <Contents>{text}</Contents>
            </WhyUsDetail>
          </StyledCol>
        ))}
      </StyledRow>
    </StyledGrid>
  </PagePart>
)

export default WhyUsPart
