import React from "react"

import Study from "./Study"
import { StyledRow } from "../styled"

import { getUser } from "../../services/auth"

const ManageList = ({ data }) => {
  const user = getUser()
  const { email } = user

  console.log("data @스터디관리: ", data)

  const studyData = data.filter(
    ({ node }) => node.frontmatter.partner.email === email
  )
  console.log("studyData: ", studyData)

  const members = [
    { name: "테스트", email: "test@gmail.com", phone: "010-1111-1111" },
    { name: "홍길동", email: "hong@gmail.com", phone: "010-2222-2222" },
  ]

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
              title={data.title}
              intro={data.intro.text}
              done={done}
              info={data.info}
              curriculum={data.curriculum}
              members={members}
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
