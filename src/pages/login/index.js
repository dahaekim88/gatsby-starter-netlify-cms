import React, { useState } from "react"
import { navigate } from "gatsby"
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons"
import { Form, Icon, Input, Button, Message } from "antd"
import { Container } from "reactstrap"

import Layout from "../../components/Layout"
import { handleLogin, isLoggedIn } from "../../services/auth"
import useForm from "../../components/reusable/useForm"
import config from "../../../.config"

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

  const handleErrors = errors => {
    if (!Array.isArray(errors) && !errors.length > 0) {
      return (
        <Message
          error
          header="Sorry"
          content="Please check your login details and try again."
        />
      )
    }
    return errors.map(e => (
      <Message error header={e.title} content={e.detail} key={e.status} />
    ))
  }

  if (isLoggedIn()) {
    navigate(`/profile`)
  }

  const urlForFacebookLogin = `${config.SERVER_URL}/auth/facebook`
  const urlForGoogleLogin = `${config.SERVER_URL}/auth/google`

  return (
    <>
      <Layout>
        <Container>
          <h1>Log in</h1>
          <Form
            onSubmit={event => handleSubmit(event)}
            loading={loading}
            error={apiError.length !== 0 || Object.entries(errors).length !== 0}
            className="login-form"
          >
            {apiError.length !== 0 ? handleErrors(errors) : null}
            <Form.Item>
              <Input
                id="email"
                fluid
                name="email"
                type="email"
                autoFocus
                onChange={handleChange}
                value={values.email || ""}
                prefix={
                  <Icon type="email" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            </Form.Item>
            {errors.email && (
              <p data-testid="error" style={{ color: "red" }}>
                {errors.email}
              </p>
            )}
            <Form.Item>
              <Input
                id="password"
                fluid
                name="password"
                type="password"
                value={values.password || ""}
                onChange={handleChange}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Password"
              />
            </Form.Item>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <a href={urlForFacebookLogin}>
              <FacebookLoginButton />
            </a>
            <a href={urlForGoogleLogin}>
              <GoogleLoginButton />
            </a>
          </Form>
        </Container>
      </Layout>
    </>
  )
}

export default LoginPage

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = "Email address is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  }
  if (!values.password) {
    errors.password = "Password is required"
  }
  return errors
}
