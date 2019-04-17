import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import ApplyStudy from "./ApplyStudy"

const ApplyList = () => {
  // TODO: 서버에서 데이터 받기 (user_id + status="paid" => study_id)
  const [list, setList] = useState([
    "def45026-af82-514c-b01d-4fa0d5e4032f",
    "f36e4750-a6a5-580e-bfeb-65788a261219",
  ])

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AllStudyQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "detail-page" } } }
        sort: { fields: [frontmatter___date], order: DESC }
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
  // console.log("data: ", data)

  const studyData = list.map(id => {
    return data.filter(({ node }) => node.id === id)[0]
  })
  // console.log("studyData: ", studyData)

  // TODO: 서버에서 데이터 받기 (study_id + status="paid" => user data)
  const members = [
    { name: "테스트", email: "test@gmail.com", phone: "010-1111-1111" },
    { name: "홍길동", email: "hong@gmail.com", phone: "010-2222-2222" },
  ]

  return (
    <>
      {studyData.map(({ node }, index) => {
        const data = node.frontmatter
        const month = new Date().getMonth()
        const formattedMonth = month < 10 ? `0${month + 1}` : month
        const today = `${new Date().getFullYear()}.${formattedMonth}.${new Date().getDate()}`
        let done = data.info.endDate < today ? true : false
        return (
          <ApplyStudy
            title={data.title}
            intro={data.intro.text}
            done={done}
            info={data.info}
            curriculum={data.curriculum}
            partner={data.partner}
            members={members}
            key={index}
          />
        )
      })}
    </>
  )
}

export default ApplyList
