import React, { Component } from "react"
import jwtDecode from "jwt-decode"
import { Avatar, Tooltip } from "antd"
import crypto from "crypto"
import "antd/dist/antd.css"

import * as auth from "../services/auth"

class AvatarComp extends Component {
  state = {
    email: "",
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      const { email } = jwtDecode(token)
      this.setState({
        email,
      })
    }
  }

  getGravatar = email => {
    const size = 200
    const md5 = crypto
      .createHash("md5")
      .update(email)
      .digest("hex")

    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`
  }

  render() {
    const { isLoggedIn } = this.props
    const { email } = this.state
    const gravatar = this.getGravatar(email)
    const message = isLoggedIn() ? ` ${auth.getUser()} ` : " 로그인 "

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
}

export default AvatarComp
