import React from "react"

import Profile from "./Profile"

const StudyLeader = ({ partner }) => (
  <Profile
    name={partner.name}
    email={partner.email}
    phone={partner.phone}
    currentJob={partner.currentJob}
    leader={true}
  />
)

export default StudyLeader
