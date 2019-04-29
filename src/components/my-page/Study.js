import React, { useState, useEffect } from "react"
import { PageHeader, Tag, Tabs, Icon } from "antd"
import axios from "axios"

import StudySchedule from "./StudySchedule"
import StudyCurriculum from "./StudyCurriculum"
import StudyLeader from "./StudyLeader"
import StudyMember from "./StudyMember"
import { BorderedContainer, TabContent } from "../styled"

import { SERVER_URL } from "../../../.config"

const TabPane = Tabs.TabPane

const Study = ({ id, title, intro, tag, info, curriculum, partner }) => {
  const [members, setMembers] = useState([])

  const config = {
    headers: { "x-auth-token": localStorage.getItem("token") || "" },
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${SERVER_URL}/mypage/members?study_id=${id}`,
        config
      )
      setMembers(result.data.members)
    }

    fetchData()
  }, [])

  console.log("members: ", members)

  return (
    <>
      <BorderedContainer>
        <PageHeader
          title={title}
          tags={
            <Tag
              color={
                tag === "스터디 완료"
                  ? ""
                  : tag === "진행중"
                  ? "geekblue"
                  : "volcano"
              }
            >
              {tag}
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
                  {!!members.length ? <StudyMember members={members} /> : ""}
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

export default Study
