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

import * as auth from "../../services/auth"
import validate from "../../services/validate"
import useForm from "../../components/reusable/useForm"
import { blue } from "../../constants"

const LoginPage = () => {
  const [loading, setLoading] = useState(false)

  const formSignup = async () => {
    setLoading(true)
    // console.log("TCL: formSignup -> values", values)

    try {
      const response = await auth.handleSignup({
        username: values.username,
        password: values.password,
        confirmPassword: values.confirmPassword,
        name: values.name,
        email: values.email,
      })
      const token = response.headers["x-auth-token"]
      // console.log("TCL: [+] RegistrationForm -> token", token)
      auth.saveJwt(token)

      // console.log("TCL: [+] move to ")
      navigate("/")
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // const errors = { ...this.state.errors }
        errors.username = ex.response.data
      }
    }
  }

  const { values, handleChange, handleSubmit, errors } = useForm(
    formSignup,
    validate
  )

  if (auth.isLoggedIn()) {
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
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword || ""}
                  onChange={handleChange}
                  placeholder="패스워드를 한 번 더 입력하세요"
                />
                {errors.confirmPassword && (
                  <Message>{errors.confirmPassword}</Message>
                )}
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
