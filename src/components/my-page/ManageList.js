import React from "react"

import Study from "./Study"
import { StyledRow } from "../styled"

import { getUser } from "../../services/auth"

const ManageList = ({ data }) => {
  const user = getUser()
  const { email } = user

  const studyData = data.filter(
    ({ node }) => node.frontmatter.partner.email === email
  )
  // console.log("studyData: ", studyData)

  return (
    <>
      {!!studyData.length ? (
        studyData.map(({ node }, index) => {
          const data = node.frontmatter
          const month = new Date().getMonth()
          const formattedMonth = month < 10 ? `0${month + 1}` : month
          const today = `${new Date().getFullYear()}.${formattedMonth}.${new Date().getDate()}`
          const done = data.info.endDate < today ? true : false
          return (
            <Study
              id={node.id}
              title={data.title}
              intro={data.intro.text}
              done={done}
              info={data.info}
              curriculum={data.curriculum}
              key={index}
            />
          )
        })
      ) : (
        <StyledRow>운영 중인 스터디가 없습니다.</StyledRow>
      )}
    </>
  )
}

export default ManageList
