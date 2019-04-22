import React, { useState } from "react"
import { Spin } from "antd"

import { FormButton, StyledRow } from "../styled"
import config from "../../../.config"
import { facebook, google, kakao, kakaoFont, naver } from "../../constants"

const urlForFacebookLogin = `${config.SERVER_URL}/auth/facebook`
const urlForGoogleLogin = `${config.SERVER_URL}/auth/google`

const SocialLogin = () => {
  const [clickFacebook, setClickFacebook] = useState(false)

  return (
    <>
      {clickFacebook ? (
        <StyledRow>
          <Spin tip="Loading..." />
        </StyledRow>
      ) : (
        <React.Fragment>
          <a href={urlForFacebookLogin}>
            <FormButton
              type="button"
              background={facebook}
              color="#fff"
              onClick={() => setClickFacebook(true)}
            >
              페이스북으로 로그인
            </FormButton>
          </a>
          <a href={urlForGoogleLogin}>
            <FormButton type="button" background={google} color="#fff">
              구글로 로그인
            </FormButton>
          </a>
          <a href={urlForFacebookLogin}>
            <FormButton type="button" background={kakao} color={kakaoFont}>
              카카오로 로그인
            </FormButton>
          </a>
          <a href={urlForGoogleLogin}>
            <FormButton type="button" background={naver} color="#fff">
              네이버로 로그인
            </FormButton>
          </a>
        </React.Fragment>
      )}
    </>
  )
}

export default SocialLogin
