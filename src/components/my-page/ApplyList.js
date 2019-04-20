import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"

import Study from "./Study"

// import http from "../../services/httpService"
import { SERVER_URL } from "../../../.config"

const ApplyList = () => {
  const [list, setList] = useState([])

  const config = {
    headers: { "x-auth-token": localStorage.getItem("token") || "" },
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${SERVER_URL}/mypage/courses`, config)
      // console.log("result: ", result.data)
      const courseData = result.data.courses.map(course => course.study_id)
      setList(courseData)
    }
    fetchData()
  }, [])

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
  // console.log("data: ", data)

  const studyData = list.map(id => {
    return data.filter(({ node }) => node.id === id)[0]
  })
  // console.log("studyData: ", studyData)

  // TODO: 서버에서 데이터 받기 (study_id + status="paid" => user data)
  const members = [
    { name: "테스트", email: "test@gmail.com", phone: "010-1111-1111" },
    { name: "test", email: "test1@gmail.com", phone: "010-3333-1111" },
    { name: "홍길동", email: "hong@gmail.com", phone: "010-2222-2222" },
  ]

  return (
    <>
      {!!list.length ? (
        studyData.map(({ node }, index) => {
          const data = node.frontmatter
          const month = new Date().getMonth()
          const formattedMonth = month < 10 ? `0${month + 1}` : month
          const today = `${new Date().getFullYear()}.${formattedMonth}.${new Date().getDate()}`
          const done = data.info.endDate < today ? true : false
          return (
            <Study
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
        })
      ) : (
        <center>신청한 스터디가 없습니다.</center>
        //TODO: loading 처리
      )}
    </>
  )
}

export default ApplyList
