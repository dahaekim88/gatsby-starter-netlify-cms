import React, { useState, useEffect } from "react"
import { Container } from "reactstrap"
import { PageHeader, Tag, Tabs, Icon, Row, Col } from "antd"
import jwtDecode from "jwt-decode"

import StyledPageHeader from "../reusable/PageHeader"
import PageDetails from "../reusable/PageDetails"
import { BorderedContainer } from "../styled"

import bgUrl from "../../assets/img/apply_bg.jpg"

const TabPane = Tabs.TabPane

const MyPageComp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const { name, email, phone } = jwtDecode(token)
      setName(name)
      setEmail(email)
      setPhone(phone)
    }
  })

  const Description = ({ term, children, span = 12 }) => (
    <Col span={span}>
      <div className="description">
        <div className="term">{term}</div>
        <div className="detail">{children}</div>
      </div>
    </Col>
  )

  const content = (
    <Row>
      <Description term="Created">Lili Qu</Description>
      <Description term="Association">421421</Description>
      <Description term="Creation Time">2017-01-10</Description>
      <Description term="Effective Time">2017-10-10</Description>
      <Description term="Remarks" span={24}>
        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
      </Description>
    </Row>
  )

  return (
    <>
      <StyledPageHeader title="My Page" bgUrl={bgUrl} />
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
              <BorderedContainer>
                <ul>
                  <li>Name: {name}</li>
                  <li>Email: {email}</li>
                  <li>Phone: {phone}</li>
                </ul>
              </BorderedContainer>
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
              <BorderedContainer>
                <PageHeader
                  title="파이썬으로 업무 자동화하기"
                  tags={<Tag color="geekblue">진행중</Tag>}
                  footer={
                    <Tabs defaultActiveKey="1">
                      <TabPane
                        tab={
                          <span>
                            <Icon type="file-search" />
                            커리큘럼
                          </span>
                        }
                        key="1"
                      />
                      <TabPane
                        tab={
                          <span>
                            <Icon type="contacts" />
                            스터디원 정보
                          </span>
                        }
                        key="2"
                      />
                    </Tabs>
                  }
                >
                  <div className="wrap">
                    <div className="content padding">{content}</div>
                  </div>
                </PageHeader>
              </BorderedContainer>

              <BorderedContainer>
                <PageHeader
                  title="Product Management"
                  tags={<Tag>스터디 완료</Tag>}
                  footer={
                    <Tabs defaultActiveKey="1">
                      <TabPane
                        tab={
                          <span>
                            <Icon type="file-search" />
                            커리큘럼
                          </span>
                        }
                        key="1"
                      />
                      <TabPane
                        tab={
                          <span>
                            <Icon type="contacts" />
                            스터디원 정보
                          </span>
                        }
                        key="2"
                      />
                    </Tabs>
                  }
                >
                  <div className="wrap">
                    <div className="content padding">{content}</div>
                  </div>
                </PageHeader>
              </BorderedContainer>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="book" />
                  스터디 관리
                </span>
              }
              key="3"
            >
              내가 만든 스터디 관리
            </TabPane>
          </Tabs>
        </PageDetails>
      </Container>
    </>
  )
}

export default MyPageComp
