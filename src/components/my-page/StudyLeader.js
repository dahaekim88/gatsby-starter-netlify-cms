import React from "react"

import MemberProfile from "./MemberProfile"

const StudyLeader = ({ partner }) => (
  <MemberProfile
    image={
      !!partner.image.childImageSharp
        ? partner.image.childImageSharp.fluid.src
        : partner.image
    }
    name={partner.name}
    email={partner.email}
    phone={partner.phone || "정보없음"}
    currentJob={partner.currentJob}
    leader={true}
  />
)

export default StudyLeader
