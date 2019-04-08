import React from "react"
import styled from "styled-components"

import { darkwhite, blue } from "../../../../../constants"

const GrayBackground = styled.div`
  background-color: ${darkwhite};
  padding: 1.5rem;
`
const Line = styled.div`
  display: flex;
`
const LeftTitle = styled.span`
  padding: 1rem 2rem;
  line-height: 2.5rem;
  font-size: 1.4rem;
`
const RightContent = styled.span`
  font-weight: bold;
  padding: 1rem 2rem;
  line-height: 2.5rem;
  font-size: 1.4rem;
`

const BlueText = styled.span`
  color: ${blue};
`

const Details = ({ info }) => (
  <GrayBackground>
    <Line>
      <LeftTitle>일 정</LeftTitle>
      <RightContent>
        {`${info.startDate} - ${info.endDate} (총 ${info.period})`}
        {/* {!!note ? ` - ${note}` : null} */}
      </RightContent>
    </Line>
    <Line>
      <LeftTitle>세 션</LeftTitle>
      <RightContent>
        {`${info.studyTimes.frequency} ${info.studyTimes.dayOfWeek} ${
          info.studyTimes.time
        }`}
        <br />
        {`총 ${info.totalMeeting}의 온라인 스터디 진행 - `}
        <BlueText>{info.schedule}</BlueText>
      </RightContent>
    </Line>
    <Line>
      <LeftTitle>가 격</LeftTitle>
      <RightContent>{info.price / 10000}만원</RightContent>
    </Line>
    <Line>
      <LeftTitle>안 내</LeftTitle>
      <RightContent>
        {info.details.split("\\n").map(line => (
          <>
            {line}
            <br />
          </>
        ))}
      </RightContent>
    </Line>
  </GrayBackground>
)

export default Details
