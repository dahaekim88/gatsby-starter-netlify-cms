import React from "react"
import styled from "styled-components"
import { Col } from "reactstrap"

import StudyIntro from "./intro/StudyIntro"
import StudyStage from "./stage/StudyStage"
// import Practice from './Practice';
import StudyPartner from "./partner/StudyPartner"
import Curriculum from "./curriculum/Curriculum"

const Container = styled.div`
  background: #f8f8f8;
`

const ImageStyledCol = styled(Col)`
  height: 45rem;
  padding: 0;
`

const StudyLeftDetails = ({ data }) => (
  <Container>
    <ImageStyledCol>
      <img
        alt={data.title}
        src={
          !!data.image.childImageSharp
            ? data.image.childImageSharp.fluid.src
            : data.image
        }
        style={{ width: "100%", height: "100%" }}
      />
    </ImageStyledCol>
    <StudyIntro data={data} />
    {/* {data.practice !== null && (
      <Practice practice={data.practice} />
    )} */}
    <StudyStage />
    {data.partner.career.length !== 0 && (
      <StudyPartner partner={data.partner} />
    )}
    <Curriculum curriculum={data.curriculum} />
  </Container>
)

export default StudyLeftDetails
