import React, { useState, useEffect } from "react"
import { Card, Avatar, Icon, Tooltip } from "antd"

import getGravatar from "../../services/getGravatar"

const { Meta } = Card

const MyProfile = ({ name, email, phone }) => {
  const [gravatar, setGravatar] = useState("")

  useEffect(() => {
    setGravatar(getGravatar(email))
  })

  const profile = (
    <>
      <div>이메일: {email}</div>
      <div>연락처: {phone}</div>
    </>
  )

  return (
    <Card
      actions={[
        <Tooltip title="패스워드 변경" placement="bottom">
          <Icon type="setting" />
        </Tooltip>,
        <Tooltip title="개인정보 수정" placement="bottom">
          <Icon type="edit" />
        </Tooltip>,
        <Tooltip title="추가정보 입력" placement="bottom">
          <Icon type="ellipsis" />
        </Tooltip>,
      ]}
    >
      <Meta
        avatar={
          <Tooltip
            placement="left"
            title="자신의 아바타 이미지가 설정이 안 되어 있다면 Gravatar https://ko.gravatar.com/ 에서 스터디스테이츠 가입 시 이용한 이메일의 아바타를 설정해보세요."
          >
            <Avatar src={gravatar} size={74} shape="square" />
          </Tooltip>
        }
        title={name}
        description={profile}
      />
    </Card>
  )
}

export default MyProfile
