import React from "react"

import MemberProfile from "./MemberProfile"

const StudyMember = ({ members }) => (
  <>
    {members.map((member, index) => (
      <MemberProfile
        name={member.name}
        email={member.email}
        phone={member.phone}
        key={index}
      />
    ))}
  </>
)

export default StudyMember
