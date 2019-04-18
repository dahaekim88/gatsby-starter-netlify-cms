import React from "react"
import { PageHeader, Tag, Tabs, Icon } from "antd"

import StudySchedule from "./StudySchedule"
import StudyCurriculum from "./StudyCurriculum"
import StudyLeader from "./StudyLeader"
import StudyMember from "./StudyMember"
import { BorderedContainer, TabContent } from "../styled"

const TabPane = Tabs.TabPane

const ApplyList = ({
  intro,
  title,
  done,
  info,
  curriculum,
  partner,
  members,
}) => {
  return (
    <>
      <BorderedContainer>
        <PageHeader
          title={title}
          tags={
            <Tag color={done ? "" : "geekblue"}>
              {done ? "스터디 완료" : "진행중"}
            </Tag>
          }
          footer={
            <Tabs type="card" defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <Icon type="calendar" />
                    일정
                  </span>
                }
                key="1"
              >
                <StudySchedule info={info} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="file-search" />
                    커리큘럼
                  </span>
                }
                key="2"
              >
                <StudyCurriculum curriculum={curriculum} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="contacts" />
                    스터디원 정보
                  </span>
                }
                key="3"
              >
                <TabContent>
                  {partner ? <StudyLeader partner={partner} /> : ""}
                  <StudyMember members={members} />
                </TabContent>
              </TabPane>
            </Tabs>
          }
        >
          {intro}
        </PageHeader>
      </BorderedContainer>
    </>
  )
}

export default ApplyList
