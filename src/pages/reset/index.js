import React, { useState } from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Container } from "reactstrap"
import querystring from "query-string"

import Layout from "../../components/Layout"
import SocialLogin from "../../components/reusable/SocialLogin"
import {
  ContentContainer,
  Title,
  FormContainer,
  StyledForm,
  FormInput,
  FormButton,
  BorderLine,
  Message,
} from "../../components/styled"
import * as auth from "../../services/auth"
import validate from "../../services/validate"
import useForm from "../../components/hooks/useForm"
import { blue } from "../../constants"

const ResetPasswordPage = ({ location }) => {
  const { token } = querystring.parse(location.href)
  console.log("TCL: ResetPasswordPage -> token", token)

  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])

  const formResetPassword = async () => {
    setLoading(true)

    try {
      const response = await auth.handleResetPassword({
        token,
        password: values.password,
        confirm: values.confirm,
      })

      console.log("TCL: formLogin -> response", response)
      navigate("/login")
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // console.log("TCL: formLogin -> ex.response", ex.response)
        const { data } = ex.response
        setApiError(data)
      }
    }
  }

  const { values, handleChange, handleSubmit, handleClick, errors } = useForm(
    formResetPassword,
    validate
  )

  if (auth.isLoggedIn()) {
    navigate(`/mypage`)
  }

  return (
    <>
      <Layout>
        <Container>
          <ContentContainer>
            <Title size="3rem">비밀번호 변경</Title>
            <FormContainer>
              <StyledForm
                onSubmit={event => handleSubmit(event)}
                loading={loading}
                error={
                  apiError.length !== 0 || Object.entries(errors).length !== 0
                }
              >
                {/* {apiError.length !== 0 ? handleErrors(errors) : null} */}
                {apiError && <Message>{apiError}</Message>}
                <FormInput
                  id="password"
                  fluid
                  name="password"
                  type="password"
                  autoFocus
                  onChange={handleChange}
                  value={values.password || ""}
                  placeholder="비밀번호를 입력하세요"
                />
                {errors.password && <Message>{errors.password}</Message>}
                <FormInput
                  id="confirm"
                  fluid
                  name="confirm"
                  type="password"
                  autoFocus
                  onChange={handleChange}
                  value={values.confirm || ""}
                  placeholder="확인을 위하여 비밀번호를 다시 한 번 입력하세요"
                />
                {errors.confirm && <Message>{errors.confirm}</Message>}
                <FormButton
                  type="submit"
                  background={blue}
                  color="#fff"
                  onClick={handleClick}
                  value="비밀번호\_변경"
                >
                  비밀번호 변경
                </FormButton>
              </StyledForm>
            </FormContainer>
          </ContentContainer>
        </Container>
      </Layout>
    </>
  )
}

export default ResetPasswordPage
