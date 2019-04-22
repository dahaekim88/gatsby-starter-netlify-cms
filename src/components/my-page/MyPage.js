import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import { Tabs, Icon } from "antd"

import PageHeader from "../reusable/PageHeader"
import PageDetails from "../reusable/PageDetails"
import MyProfile from "../my-page/MyProfile"
import ApplyList from "../my-page/ApplyList"
import ManageList from "../my-page/ManageList"

import { getUser } from "../../services/auth"
import bgUrl from "../../assets/img/apply_bg.jpg"

const TabPane = Tabs.TabPane

const MyPageComp = () => {
  const user = getUser()
  const [isAdmin, setAdmin] = useState(false)

  useEffect(() => {
    if (user.isAdmin) {
      setAdmin(true)
    }
  })

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AllStudyQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "detail-page" } } }
        sort: { fields: [frontmatter___info___endDate], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              intro {
                text
              }
              info {
                startDate(formatString: "YYYY.MM.DD")
                endDate(formatString: "YYYY.MM.DD")
                period
                schedule
                studyTimes {
                  frequency
                  dayOfWeek
                  time
                }
              }
              partner {
                image {
                  childImageSharp {
                    fluid(maxWidth: 110, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                name
                email
                currentJob
              }
              curriculum {
                intro
                weeklyTopics
              }
            }
          }
        }
      }
    }
  `)

  const data = allMarkdownRemark.edges
  // console.log("data @마이페이지: ", data)

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
              <MyProfile
                name={user.name}
                email={user.email}
                phone={user.phone}
              />
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
              <ApplyList data={data} />
            </TabPane>
            {isAdmin ? (
              <TabPane
                tab={
                  <span>
                    <Icon type="book" />
                    스터디 관리
                  </span>
                }
                key="3"
              >
                <ManageList data={data} />
              </TabPane>
            ) : (
              ""
            )}
          </Tabs>
        </PageDetails>
      </Container>
    </>
  )
}

export default MyPageComp
