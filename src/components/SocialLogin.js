import React, { useState } from "react"
import { GridLoader } from "react-spinners"
import { css } from "@emotion/core"

import { FormButton } from "./reusable/styledComponents"
import config from "../../.config"
import { facebook, google, kakao, kakaoFont, naver } from "../constants"

const urlForFacebookLogin = `${config.SERVER_URL}/auth/facebook`
const urlForGoogleLogin = `${config.SERVER_URL}/auth/google`

const override = css`
  display: block;
  text-align: center;
  margin-left: 200px;
  border-color: red;
`

const SocialLogin = () => {
  const [clickFacebook, setClickFacebook] = useState(false)

  return (
    <>
      {clickFacebook ? (
        <div style={{ marginLeft: 150, marginTop: 50 }}>
          <GridLoader css={override} sizeUnit="px" size={20} color={facebook} />
        </div>
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
