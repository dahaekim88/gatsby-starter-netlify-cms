import React from "react"
import { Timeline, Icon } from "antd"

import { BorderedContainer } from "../styled"

const StudySchedule = ({ info }) => (
  <BorderedContainer style={{ padding: "3rem 0 0 3rem" }}>
    <Timeline>
      <Timeline.Item
        dot={<Icon type="info-circle" style={{ fontSize: "16px" }} />}
      >
        <strong>총 기간:</strong> {info.startDate} ~ {info.endDate} (총{" "}
        {info.period})
      </Timeline.Item>
      <Timeline.Item
        dot={<Icon type="calendar" style={{ fontSize: "16px" }} />}
      >
        <strong>스터디 일정:</strong> {info.schedule}
      </Timeline.Item>
      <Timeline.Item
        dot={<Icon type="clock-circle" style={{ fontSize: "16px" }} />}
        style={{ padding: "0" }}
      >
        <strong>스터디 시간:</strong> {info.studyTimes.frequency}{" "}
        {info.studyTimes.dayOfWeek} {info.studyTimes.time}
      </Timeline.Item>
    </Timeline>
  </BorderedContainer>
)

export default StudySchedule
