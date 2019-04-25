import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { CardContainer } from "../styled"
import { sizes } from "../../constants"

const CourseName = styled.p`
  margin-top: 2.5rem;
  font-size: 2rem;
  font-weight: bold;
`

const CourseInfoList = styled.div`
  margin-top: 2.5rem;
  font-size: 1.5rem;
  position: absolute;
  bottom: 5%;
`

const CoursePeriod = styled.p`
  font-size: 1.5rem;
`

const CoursePrice = styled.p`
  margin-top: 15px;
  font-weight: bold;
  font-size: 2.5rem;
`

const Details = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0 30px;
  font-size: 1.4rem;
  font-weight: 300;
  word-break: keep-all;

  @media screen and (min-width: ${sizes.mobile}px) and (max-width: ${sizes.b_tablet}px) {
    padding: 0 60px;
  }
`

const CourseIntro = ({
  courseImage,
  courseName,
  details,
  price,
  period,
  highlighted,
}) => {
  return (
    <CardContainer highlighted={highlighted}>
      <img
        alt={courseName}
        src={courseImage}
        style={{ width: "100%", height: "50%" }}
      />
      <CourseName>{courseName}</CourseName>
      <Details>{details}</Details>
      <CourseInfoList>
        <CoursePeriod>기간: {period}</CoursePeriod>
        <CoursePrice>{price / 10000}만원</CoursePrice>
      </CourseInfoList>
    </CardContainer>
  )
}

export default CourseIntro

CourseIntro.propTypes = {
  courseImage: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  highlighted: PropTypes.bool,
}

CourseIntro.defaultProps = {
  highlighted: false,
}
