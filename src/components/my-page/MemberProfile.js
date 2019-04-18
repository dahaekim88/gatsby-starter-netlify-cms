import React, { useState, useEffect } from "react"
import { Col, Card, Avatar, Tag } from "antd"

import getGravatar from "../../services/getGravatar"

const { Meta } = Card

const MemberProfile = ({ image, name, email, phone, currentJob, leader }) => {
  const [gravatar, setGravatar] = useState("")

  useEffect(() => {
    setGravatar(getGravatar(email))
  })

  const title = (
    <div>
      {name}{" "}
      {leader ? (
        <Tag color="orange" style={{ height: "20px" }}>
          스터디 리더
        </Tag>
      ) : null}
    </div>
  )

  const profile = (
    <>
      <div>이메일: {email}</div>
      <div>연락처: {phone}</div>
    </>
  )

  return (
    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
      <Card style={{ margin: "1rem" }}>
        <Meta
          avatar={image ? <Avatar src={image} /> : <Avatar src={gravatar} />}
          title={title}
          description={profile}
        />
      </Card>
    </Col>
  )
}

export default MemberProfile
