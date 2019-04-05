import querystring from "query-string"

import * as auth from "../../services/auth"

const AuthController = ({ location }) => {
  const { token } = querystring.parse(location.href)
  // console.log("TCL: [+] AuthController -> token", token)

  auth.saveTokenAndMoveToRoot(token)

  // *: This component is ONLY used to get token. So that nothing will be rendered.
  return null
}

export default AuthController
