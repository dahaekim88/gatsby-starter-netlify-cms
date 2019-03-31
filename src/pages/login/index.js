import React, { useState } from "react"
import { navigate } from "gatsby"
import { Container } from "reactstrap"

import Layout from "../../components/Layout"
import SocialLogin from "../../components/SocialLogin"
import {
  ContentContainer,
  Title,
  FormContainer,
  StyledForm,
  FormInput,
  FormButton,
  BorderLine,
  Message,
} from "../../components/reusable/styledComponents"

import { handleLogin, isLoggedIn } from "../../services/auth"
import useForm from "../../components/reusable/useForm"
import { blue } from "../../constants"

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])

  const formLogin = () => {
    setLoading(true)
    handleLogin({ email: values.email, password: values.password })
      .then(() => {
        navigate("/profile")
      })
      .catch(e => {
        setLoading(false)
        setApiError(e.errors || e)
      })
  }

  const { values, handleChange, handleSubmit, errors } = useForm(
    formLogin,
    validate
  )

  // const handleErrors = errors => {
  //   if (!Array.isArray(errors) && !errors.length > 0) {
  //     return (
  //       <Message
  //         error
  //         header="Sorry"
  //         content="Please check your login details and try again."
  //       />
  //     )
  //   }
  //   return errors.map(e => (
  //     <Message error header={e.title} content={e.detail} key={e.status} />
  //   ))
  // }

  if (isLoggedIn()) {
    navigate(`/profile`)
  }

  return (
    <>
      <Layout>
        <Container>
          <ContentContainer>
            <Title size="3rem">Log in</Title>
            <FormContainer>
              <StyledForm
                onSubmit={event => handleSubmit(event)}
                loading={loading}
                error={
                  apiError.length !== 0 || Object.entries(errors).length !== 0
                }
              >
                {/* {apiError.length !== 0 ? handleErrors(errors) : null} */}
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
                <FormInput
                  id="password"
                  fluid
                  name="password"
                  type="password"
                  value={values.password || ""}
                  onChange={handleChange}
                  placeholder="패스워드를 입력하세요"
                />
                {errors.password && <Message>{errors.password}</Message>}
                <FormButton type="submit" background={blue} color="#fff">
                  로그인
                </FormButton>

                <div style={{ margin: "1.5rem 0" }}>
                  <BorderLine />
                  <span
                    style={{
                      margin: "0 15px",
                      verticalAlign: "middle",
                      fontSize: "1.3rem",
                    }}
                  >
                    or
                  </span>
                  <BorderLine />
                </div>

                <SocialLogin />
              </StyledForm>
            </FormContainer>
          </ContentContainer>
        </Container>
      </Layout>
    </>
  )
}

export default LoginPage

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = "이메일 입력이 반드시 필요합니다"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "이메일 형식에 맞게 입력해주세요"
  }
  if (!values.password) {
    errors.password = "패스워드 입력이 반드시 필요합니다"
  }
  return errors
}
