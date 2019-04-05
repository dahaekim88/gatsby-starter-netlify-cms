import jwtDecode from "jwt-decode"
import { navigate } from "gatsby"

import config from "../../.config"
import http from "../services/httpService"
import * as auth from "../services/auth"

export const KEY_TOKEN = "token"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => {
  // isBrowser() && window.localStorage.getItem("gatsbyUser")
  //   ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
  //   : {}

  if (isBrowser()) {
    const token = getToken()
    const { name } = jwtDecode(token)
    return name
  } else {
    return null
  }
}

export const setUser = user => {
  isBrowser() && window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
}

export const handleSignup = async ({
  username,
  password,
  name,
  email,
  confirmPassword,
}) => {
  const urlSignUp = `${config.SERVER_URL}/signup`
  const data = await http.post(urlSignUp, {
    username,
    password,
    confirmPassword,
    name,
    email,
  })
  // console.log("TCL: handleSignup -> data", data)
  return data
}

export const handleSubmitAdditionalInfo = async ({
  id,
  name,
  email,
  phone
}) => {
  const urlSubmitAdditionalInfo = `${config.SERVER_URL}/auth/additionalInfo`
  const data = await http.post(urlSubmitAdditionalInfo, {
    id,
    name,
    email,
    phone
  })
  console.log("TCL: handleSignup -> data", data)
  return data
}

export const handleLogin = async ({ email, password }) => {
  const urlLogin = `${config.SERVER_URL}/login`
  const response = await http.post(urlLogin, {
    email,
    password,
  })
  // console.log("TCL: handleLogin -> response", response)

  const token = response.headers["x-auth-token"]
  // console.log("TCL: [+] RegistrationForm -> token", token)
  auth.saveToken(token)

  // console.log("TCL: [+] move to ")
  navigate("/")
}

export const isLoggedIn = () => {
  // const user = getUser()
  // return !!user.username
  const token = getToken()
  return !!token
}

export const logout = callback => {
  isBrowser() && window.localStorage.removeItem(KEY_TOKEN)
  setUser({})
  // if (callback) callback()
  navigate("/")
}

export const loginWithToken = jwt => {
  saveToken(jwt)
}
export const getToken = () => {
  return isBrowser() && window.localStorage.getItem(KEY_TOKEN)
}

export const saveToken = jwt => {
  if (jwt) {
    isBrowser() && window.localStorage.setItem(KEY_TOKEN, jwt)
  }
}

export const saveTokenAndMoveToRoot = jwt => {
  saveToken(jwt)
  isBrowser() && navigate("/")
}
