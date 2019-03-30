import React, { useState } from "react"
import { Link } from "gatsby"
import { Container } from "reactstrap"

import {
  DarkBackground,
  Title,
  StyledGrid,
  StyledRow,
  StyledCol,
  HoveredButton,
} from "../reusable/styledComponents"
import CourseIntro from "../reusable/CourseIntro"
import studyData from "./data/studyData"

const LinkButton = HoveredButton.withComponent(Link)

const CoursesIntro = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null)

  return (
    <DarkBackground>
      <Title size="4rem" style={{ margin: "2rem 0" }}>
        인기 스터디
      </Title>
      <Container>
        <StyledGrid>
          <StyledRow>
            {studyData
              .filter(study => study.main === true)
              .map(
                (
                  { courseImage, courseName, details, price, period },
                  index
                ) => (
                  <StyledCol
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    key={`courses-intro-${index * 10}`}
                    data-index-number={index}
                    onMouseEnter={() => setHoveredCourse(index)}
                    onMouseLeave={() => setHoveredCourse(null)}
                  >
                    {/* <Link to={link} style={{ textDecoration: "none" }}> */}
                    <CourseIntro
                      courseImage={courseImage}
                      courseName={courseName}
                      details={details}
                      price={price}
                      period={period}
                      highlighted={hoveredCourse === index}
                    />
                    {/* </Link> */}
                  </StyledCol>
                )
              )}
          </StyledRow>
        </StyledGrid>
        <StyledRow>
          <LinkButton to="/topics" width="20rem" size="1.7rem">
            전체 스터디 확인하기
          </LinkButton>
        </StyledRow>
      </Container>
    </DarkBackground>
  )
}

export default CoursesIntro
