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

  const formSignup = () => {
    // update 필요!!!
    setLoading(true)
    handleLogin({ email: values.email, password: values.password })
      .then(() => {
        navigate("/profile")
      })
      .catch(e => {
        setLoading(false)
      })
  }

  const { values, handleChange, handleSubmit, errors } = useForm(
    formSignup,
    validate
  )

  if (isLoggedIn()) {
    navigate(`/profile`)
  }

  return (
    <>
      <Layout>
        <Container>
          <ContentContainer>
            <Title size="3rem">Sign up</Title>
            <FormContainer>
              <StyledForm
                onSubmit={event => handleSubmit(event)}
                loading={loading}
              >
                <FormInput
                  id="name"
                  fluid
                  name="name"
                  type="text"
                  autoFocus
                  onChange={handleChange}
                  value={values.name || ""}
                  placeholder="이름을 입력하세요"
                />
                {errors.name && <Message>{errors.name}</Message>}
                <FormInput
                  id="email"
                  fluid
                  name="email"
                  type="text"
                  onChange={handleChange}
                  value={values.email || ""}
                  placeholder="이메일을 입력하세요"
                />
                {errors.email && <Message>{errors.email}</Message>}
                <FormInput
                  id="phone"
                  fluid
                  name="phone"
                  type="text"
                  onChange={handleChange}
                  value={values.phone || ""}
                  placeholder="휴대폰 번호를 입력하세요"
                />
                {errors.phone && <Message>{errors.phone}</Message>}
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
                <FormInput
                  fluid
                  name="password"
                  type="password"
                  value={values.password || ""}
                  onChange={handleChange}
                  placeholder="패스워드를 한 번 더 입력하세요"
                />
                {errors.password && <Message>{errors.password}</Message>}
                <FormButton type="submit" background={blue} color="#fff">
                  회원가입
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
  const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  const phoneRegex = /^01(?:0|1|[6-9]) - (?:\\d{3}|\\d{4}) - \\d{4}$/

  if (!values.name) {
    errors.name = "이름을 반드시 입력해주세요"
  }
  if (!values.email) {
    errors.email = "이메일을 반드시 입력해주세요"
  } else if (!emailRegex.test(values.email)) {
    errors.email = "이메일 형식에 맞게 입력해주세요"
  }
  if (!values.phone) {
    errors.phone = "휴대폰 번호를 반드시 입력해주세요"
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = "휴대폰 형식에 맞게 입력해주세요"
  }
  if (!values.password) {
    errors.password = "패스워드를 반드시 입력해주세요"
  }
  return errors
}
