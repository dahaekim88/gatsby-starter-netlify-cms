import React, { useState } from "react"
import { navigate } from "gatsby"
import { Container } from "reactstrap"
import querystring from "query-string"

import Layout from "../../components/Layout"
import {
  ContentContainer,
  Title,
  FormContainer,
  StyledForm,
  FormInput,
  FormButton,
  Message,
} from "../../components/styled"

import * as auth from "../../services/auth"
import validate from "../../services/validate"
import useForm from "../../components/hooks/useForm"

import { blue } from "../../constants"

const SubmitAdditionalInfo_Page = props => {
  const [loading, setLoading] = useState(false)

  const { id } = querystring.parse(props.location.href)

  const formSubmitAdditionalInfo = async () => {
    setLoading(true)

    try {
      const response = await auth.handleSubmitAdditionalInfo({
        id: id,
        name: values.name,
        email: values.email,
        phone: values.phone,
      })
      const token = response.headers["x-auth-token"]
      // console.log("TCL: [+] 4. formSubmitAdditionalInfo -> token", token)
      auth.saveToken(token)

      // console.log("TCL: [+] move to ")
      navigate("/")
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // const errors = { ...this.state.errors }
        errors.username = ex.response.data
      }
    }
  }

  const { values, handleChange, handleSubmit, handleClick, errors } = useForm(
    formSubmitAdditionalInfo,
    validate
  )
  // console.log("TCL: [+] formSubmitAdditionalInfo -> values", values)

  if (auth.isLoggedIn()) {
    navigate(`/mypage`)
  }

  return (
    <>
      <Layout>
        <Container>
          <ContentContainer>
            <Title size="3rem">추가 정보 입력</Title>
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
                <FormButton
                  type="submit"
                  background={blue}
                  color="#fff"
                  onClick={handleClick}
                  value="추가정보전송"
                >
                  추가 정보 전송
                </FormButton>
              </StyledForm>
            </FormContainer>
          </ContentContainer>
        </Container>
      </Layout>
    </>
  )
}

export default SubmitAdditionalInfo_Page
