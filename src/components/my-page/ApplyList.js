import React, { useState, useEffect } from "react"
import axios from "axios"
import { Spin } from "antd"

import Study from "./Study"
import { StyledRow } from "../styled"

import { SERVER_URL } from "../../../.config"

const ApplyList = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])

  const config = {
    headers: { "x-auth-token": localStorage.getItem("token") || "" },
  }

  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      const result = await axios.get(`${SERVER_URL}/mypage/courses`, config)
      // console.log("result: ", result.data)
      const courseData = result.data.courses.map(course => course.study_id)
      setList(courseData)
      setLoading(false)
    }

    fetchData()
  }, [])

  const studyData = list.map(id => {
    return data.filter(({ node }) => node.id === id)[0]
  })
  // console.log("studyData: ", studyData)

  return (
    <>
      {loading ? (
        <StyledRow>
          <Spin tip="Loading..." />
        </StyledRow>
      ) : (
        <>
          {!!list.length ? (
            studyData.map(({ node }, index) => {
              const data = node.frontmatter
              const month = new Date().getMonth()
              const formattedMonth = month < 10 ? `0${month + 1}` : month
              const today = `${new Date().getFullYear()}.${formattedMonth}.${new Date().getDate()}`
              const tag =
                data.info.endDate < today
                  ? "스터디 완료"
                  : data.info.startDate > today
                  ? "대기중"
                  : "진행중"

              return (
                <Study
                  id={node.id}
                  title={data.title}
                  intro={data.intro.text}
                  tag={tag}
                  info={data.info}
                  curriculum={data.curriculum}
                  partner={data.partner}
                  key={index}
                />
              )
            })
          ) : (
            <StyledRow>신청한 스터디가 없습니다.</StyledRow>
          )}
        </>
      )}
    </>
  )
}

export default ApplyList
