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
  const [apiError, setApiError] = useState([])

  const formLogin = async () => {
    setLoading(true)

    try {
      const response = await auth.handleLogin({
        email: values.email,
        password: values.password,
      })
      const token = response.headers["x-auth-token"]
      // console.log("TCL: [+] RegistrationForm -> token", token)
      auth.saveToken(token)

      // console.log("TCL: [+] move to ")
      navigate("/")
      /*
    handleLogin({ email: values.email, password: values.password })
      .then(() => {
        navigate("/profile")
      })
      .catch(e => {
        setLoading(false)
        setApiError(e.errors || e)
      })
      */
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // console.log("TCL: formLogin -> ex.response", ex.response)
        const { data } = ex.response
        setApiError(data)
      }
    }
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

  if (auth.isLoggedIn()) {
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
