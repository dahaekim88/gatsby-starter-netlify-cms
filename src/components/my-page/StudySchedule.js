import React from "react"

const StudySchedule = ({ info }) => (
  <ul>
    <li>
      기간: {info.startDate} ~ {info.endDate} (총 {info.period})
    </li>
    <li>일정: {info.schedule}</li>
    <li>
      시간: {info.studyTimes.frequency} {info.studyTimes.dayOfWeek}{" "}
      {info.studyTimes.time}
    </li>
  </ul>
)

export default StudySchedule
