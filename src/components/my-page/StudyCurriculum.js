import React from "react"
import { Collapse } from "antd"

const Panel = Collapse.Panel

const StudyCurriculum = ({ curriculum }) => (
  <Collapse accordion>
    {curriculum.map((week, index) => (
      <Panel header={`Week ${index + 1}`} key={`${index + 1}`}>
        {week.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </Panel>
    ))}
  </Collapse>
)

export default StudyCurriculum
