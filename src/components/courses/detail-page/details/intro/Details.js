import React from "react"
import styled from "styled-components"

import { RedText } from "../../../../styled"
import { darkwhite, blue, sizes } from "../../../../../constants"

const GrayBackground = styled.div`
  background-color: ${darkwhite};
  padding: 1.5rem;
`
const Line = styled.div`
  display: flex;

  @media screen and (max-width: ${sizes.mobile}px) {
    display: block;
  }
`
const LeftTitle = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  line-height: 2.5rem;
  font-size: 1.4rem;
  font-weight: bold;

  @media screen and (max-width: ${sizes.mobile}px) {
    padding-bottom: 0;
  }
`
const RightContent = styled.div`
  flex: 8;
  padding: 1rem 2rem;
  line-height: 2.5rem;
  font-size: 1.4rem;

  @media screen and (max-width: ${sizes.mobile}px) {
    padding-top: 0;
  }
`

const BlueText = styled.span`
  color: ${blue};

  @media screen and (max-width: ${sizes.mobile}px) {
    display: block;
  }
`

const Details = ({ info }) => {
  const {
    startDate,
    endDate,
    period,
    note,
    studyTimes,
    totalMeeting,
    schedule,
    price,
    details,
  } = info

  const endDateWithoutYear =
    startDate.slice(0, 5) === endDate.slice(0, 5) ? endDate.slice(5) : endDate

  return (
    <GrayBackground>
      <Line>
        <LeftTitle>일 정</LeftTitle>
        <RightContent>
          {`${startDate} - ${endDateWithoutYear} (총 ${period})`}
          {!!note ? <RedText>{note}</RedText> : null}
        </RightContent>
      </Line>
      <Line>
        <LeftTitle>세 션</LeftTitle>
        <RightContent>
          {`${studyTimes.frequency} ${studyTimes.dayOfWeek} ${studyTimes.time}`}
          <br />
          {`총 ${totalMeeting}의 온라인 스터디 진행 `}
          <BlueText>- {schedule}</BlueText>
        </RightContent>
      </Line>
      <Line>
        <LeftTitle>가 격</LeftTitle>
        <RightContent>{price / 10000}만원</RightContent>
      </Line>
      <Line>
        <LeftTitle>안 내</LeftTitle>
        <RightContent>
          {details.split("\\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </RightContent>
      </Line>
    </GrayBackground>
  )
}

export default Details
