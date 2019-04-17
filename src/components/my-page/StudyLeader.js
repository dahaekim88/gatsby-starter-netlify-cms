import React from "react"

import Profile from "./Profile"

const StudyLeader = ({ partner }) => (
  <Profile
    name={partner.name}
    email={partner.email}
    phone={partner.phone || "정보없음"}
    currentJob={partner.currentJob}
    leader={true}
  />
)

export default StudyLeader
