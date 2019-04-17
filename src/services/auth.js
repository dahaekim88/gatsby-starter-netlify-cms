import jwtDecode from "jwt-decode"
import { navigate } from "gatsby"

import config from "../../.config"
import http from "../services/httpService"

export const KEY_TOKEN = "token"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => {
  if (isBrowser()) {
    const token = getToken()
    const { name, email, phone } = jwtDecode(token)
    return {
      name,
      email,
      phone,
    }
  } else {
    return {}
  }
}

export const handleSignup = async ({
  name,
  email,
  phone,
  password,
  confirmPassword,
}) => {
  const urlSignUp = `${config.SERVER_URL}/signup`
  const data = await http.post(urlSignUp, {
    name,
    email,
    phone,
    password,
    confirmPassword,
  })
  // console.log("TCL: handleSignup -> data", data)
  return data
}

export const handleSubmitAdditionalInfo = async ({
  id,
  name,
  email,
  phone,
}) => {
  const urlSubmitAdditionalInfo = `${config.SERVER_URL}/auth/additionalInfo`
  const data = await http.post(urlSubmitAdditionalInfo, {
    id,
    name,
    email,
    phone,
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
  saveToken(token)

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
