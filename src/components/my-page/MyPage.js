import React from "react"
import { Container } from "reactstrap"
import { Tabs, Icon } from "antd"

import PageHeader from "../reusable/PageHeader"
import PageDetails from "../reusable/PageDetails"
import Profile from "../my-page/Profile"
import ApplyList from "../my-page/ApplyList"
import ManageList from "../my-page/ManageList"

import { getUser } from "../../services/auth"
import bgUrl from "../../assets/img/apply_bg.jpg"

const TabPane = Tabs.TabPane

const MyPageComp = () => {
  const user = getUser()

  return (
    <>
      <PageHeader title="My Page" bgUrl={bgUrl} />
      <Container>
        <PageDetails align="left" md={10} sm={12}>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <Icon type="user" />내 정보
                </span>
              }
              key="1"
            >
              <Profile name={user.name} email={user.email} phone={user.phone} />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="read" />
                  신청 스터디
                </span>
              }
              key="2"
            >
              <ApplyList />
            </TabPane>
            {/* TODO: isAdmin 체크!! */}
            <TabPane
              tab={
                <span>
                  <Icon type="book" />
                  스터디 관리
                </span>
              }
              key="3"
            >
              <ManageList />
            </TabPane>
          </Tabs>
        </PageDetails>
      </Container>
    </>
  )
}

export default MyPageComp
