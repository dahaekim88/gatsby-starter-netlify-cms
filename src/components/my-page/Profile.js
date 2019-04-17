import React, { useState, useEffect } from "react"
import { Avatar, Tag } from "antd"

import { BorderedContainer } from "../styled"

import getGravatar from "../../services/getGravatar"

const Profile = ({ name, email, phone, currentJob, leader }) => {
  const [gravatar, setGravatar] = useState("")

  useEffect(() => {
    setGravatar(getGravatar(email))
  })

  return (
    <BorderedContainer>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "0 1rem", margin: "0 1rem" }}>
          <Avatar src={gravatar} size={80} shape="square" />
        </div>
        <ul>
          <li>
            name: {name} {leader ? <Tag color="orange">스터디 리더</Tag> : null}
          </li>
          <li>email: {email}</li>
          <li>phone: {phone}</li>
          {currentJob ? <li>current job: {currentJob}</li> : null}
        </ul>
      </div>
    </BorderedContainer>
  )
}

export default Profile
