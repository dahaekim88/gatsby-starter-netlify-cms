import React from "react"
import { Collapse } from "antd"

import { TabContent } from "../styled"

const Panel = Collapse.Panel

const StudyCurriculum = ({ curriculum }) => (
  <TabContent>
    <p>{curriculum.intro}</p>
    <Collapse accordion>
      {curriculum.weeklyTopics.map((week, index) => (
        <Panel header={`Week ${index + 1}`} key={`${index + 1}`}>
          {week.split("\\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </Panel>
      ))}
    </Collapse>
  </TabContent>
)

export default StudyCurriculum
