import React from "react"
import styled from "styled-components"
import { Col } from "reactstrap"

import StudyIntro from "./intro/StudyIntro"
import StudyStage from "./stage/StudyStage"
import StudyPartner from "./partner/StudyPartner"
import Curriculum from "./curriculum/Curriculum"

const Container = styled.div`
  background: #f8f8f8;
`

const ImageStyledCol = styled(Col)`
  height: 45rem;
  padding: 0;
`

const StudyLeftDetails = ({ data }) => {
  const { title, image, info, intro, partner, curriculum } = data

  return (
    <Container>
      <ImageStyledCol>
        <img
          alt={title}
          src={
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          }
          style={{ width: "100%", height: "100%" }}
        />
      </ImageStyledCol>
      <StudyIntro title={title} intro={intro} info={info} />
      <StudyStage />
      {partner.careers.length !== 0 && <StudyPartner partner={partner} />}
      <Curriculum curriculum={curriculum} />
    </Container>
  )
}

export default StudyLeftDetails
