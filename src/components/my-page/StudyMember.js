import React from "react"

import Profile from "./Profile"

const StudyMember = ({ members }) => (
  <>
    {members.map((member, index) => (
      <Profile
        name={member.name}
        email={member.email}
        phone={member.phone}
        key={index}
      />
    ))}
  </>
)

export default StudyMember
