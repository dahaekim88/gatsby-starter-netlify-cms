import React, { useState } from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Container } from "reactstrap"

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

const ForgotPage = () => {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])

  const formForgot = async () => {
    setLoading(true)

    try {
      const response = await auth.handleForgot({
        email: values.email,
      })

      console.log("TCL: formLogin -> response", response)
      // navigate("/")
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // console.log("TCL: formLogin -> ex.response", ex.response)
        const { data } = ex.response
        setApiError(data)
      }
    }
  }

  const { values, handleChange, handleSubmit, handleClick, errors } = useForm(
    formForgot,
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
            <Title size="3rem">비밀번호 찾기</Title>
            비밀번호를 찾고자 하는 이 메일을 입력해 주세요.
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
                  id="email"
                  fluid
                  name="email"
                  type="text"
                  autoFocus
                  onChange={handleChange}
                  value={values.email || ""}
                  placeholder="이메일을 입력하세요"
                />
                {errors.email && <Message>{errors.email}</Message>}
                <FormButton
                  type="submit"
                  background={blue}
                  color="#fff"
                  onClick={handleClick}
                  value="비밀번호\_찾기"
                >
                  비밀번호 찾기
                </FormButton>
              </StyledForm>
            </FormContainer>
          </ContentContainer>
        </Container>
      </Layout>
    </>
  )
}

export default ForgotPage
