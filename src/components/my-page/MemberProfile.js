import React, { useState, useEffect } from "react"
import { Col, Card, Avatar, Tag } from "antd"

import { ProfileImg } from "../styled"

import getGravatar from "../../services/getGravatar"

const { Meta } = Card

const MemberProfile = ({ image, name, email, phone, currentJob, leader }) => {
  const [gravatar, setGravatar] = useState("")

  useEffect(() => {
    setGravatar(getGravatar(email))
  })

  const title = (
    <div>
      {name} {leader ? <Tag color="orange">스터디 리더</Tag> : null}
    </div>
  )

  const profile = (
    <>
      <div>이메일: {email}</div>
      <div>연락처: {phone}</div>
    </>
  )

  return (
    <Col span={12}>
      <Card style={{ margin: "1rem" }}>
        <Meta
          avatar={
            image ? (
              <ProfileImg src={image} alt={name} />
            ) : (
              <Avatar src={gravatar} size={74} shape="square" />
            )
          }
          title={title}
          description={profile}
        />
      </Card>
    </Col>
  )
}

export default MemberProfile
