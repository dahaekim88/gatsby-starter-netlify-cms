import React, { useState, useEffect } from "react"
import jwtDecode from "jwt-decode"
import { Avatar, Tooltip } from "antd"

import { getUser } from "../services/auth"
import getGravatar from "../services/getGravatar"

const AvatarComp = ({ isLoggedIn }) => {
  const [userEmail, setEmail] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const { email } = jwtDecode(token)
      setEmail(email)
    }
  })

  const gravatar = getGravatar(userEmail)
  const message = isLoggedIn() ? ` ${getUser()} ` : " 로그인 "

  return (
    <span>
      <Tooltip
        placement="topLeft"
        title="자신의 아바타 이미지가 설정이 안 되어 있다면 Gravatar https://ko.gravatar.com/ 에서 스터디스테이츠 가입 시 이용한 이메일의 아바타를 설정해보세요."
      >
        {!isLoggedIn() && <Avatar icon="user" />}
        {isLoggedIn() && <Avatar src={gravatar} />}
      </Tooltip>
      {message}
    </span>
  )
}

export default AvatarComp
