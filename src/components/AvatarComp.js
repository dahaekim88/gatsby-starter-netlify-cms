import React, { Component } from "react"
import jwtDecode from "jwt-decode"
import { Avatar } from "antd"
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
        {!isLoggedIn() && <Avatar icon="user" />}
        {isLoggedIn() && <Avatar src={gravatar} />}
        {message}
      </span>
    )
  }
}

export default AvatarComp
