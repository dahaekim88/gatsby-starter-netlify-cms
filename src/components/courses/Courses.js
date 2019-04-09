import React, { useState } from "react"
import { Link } from "gatsby"
import { Container } from "reactstrap"

import {
  DarkBackground,
  SmallTitle,
  StyledGrid,
  StyledRow,
  StyledCol,
} from "../styled"
import CourseIntro from "../reusable/CourseIntro"
import PageHeader from "../reusable/PageHeader"

import bgUrl from "../../assets/img/topics_bg.jpg"

const CoursesIntro = ({ courses }) => {
  const [hoveredCourse, setHoveredCourse] = useState(null)

  return (
    <>
      <PageHeader title="Topics" bgUrl={bgUrl} />
      <DarkBackground>
        <SmallTitle>스터디 소개</SmallTitle>
        <Container>
          <StyledGrid>
            <StyledRow>
              {courses
                .filter(({ node }) => node.frontmatter.open === true)
                .map(({ node }, index) => {
                  const {
                    open,
                    image,
                    title,
                    description,
                    info,
                  } = node.frontmatter
                  return (
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
                      <Link
                        to={node.fields.slug}
                        style={{ textDecoration: "none" }}
                      >
                        <CourseIntro
                          courseImage={
                            !!image.childImageSharp
                              ? image.childImageSharp.fluid.src
                              : image
                          }
                          courseName={title}
                          details={description}
                          price={info.price}
                          period={info.period}
                          highlighted={hoveredCourse === index}
                        />
                      </Link>
                    </StyledCol>
                  )
                })}
            </StyledRow>
          </StyledGrid>
        </Container>
      </DarkBackground>
    </>
  )
}

export default CoursesIntro
