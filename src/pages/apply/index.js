import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container, Form, FormGroup } from "reactstrap"

import Layout from "../../components/Layout"
import PageHeader from "../../components/reusable/PageHeader"
import PageDetails from "../../components/reusable/PageDetails"
import {
  SmallTitle,
  Background,
  StyledLabel,
  StyledInput,
  FormButton,
  FormQuestionLabel,
  StyledSpan,
  ButtonContainer,
  Message,
} from "../../components/reusable/styledComponents"

import useForm from "../../components/reusable/useForm"
import validate from "../../services/validate"
import { blue } from "../../constants"
import bgUrl from "../../assets/img/apply_bg.jpg"

import { IAMPORT_KEY } from "../../keys"
import { SERVER_URL, IMPORT_PG } from "../../../.config"

const ApplyPage = ({ data }) => {
  const courses = data.allMarkdownRemark.edges
  // console.log("courses: ", courses)
  const [status, setStatus] = useState("unpaid")
  const [couponChk, setCouponChk] = useState(false)
  const [couponValidity, setCouponValidity] = useState(false)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])

  const formApply = async () => {
    setLoading(true)

    // console.log("values: ", values)
    const { studyTitle, studyTime, paymentMethod } = values

    const selectedStudy = courses.filter(
      ({ node }) => node.frontmatter.title === studyTitle
    )
    // console.log("selectedStudy: ", selectedStudy)
    const { id, frontmatter } = selectedStudy[0].node
    const { price } = frontmatter.info

    const merchant_uid = `studystates_${new Date().getTime()}`

    try {
      const now = new Date()
      now.setDate(now.getDate() + 1)
      const vbankDue = `${now.getFullYear().toString() +
        `0${now.getMonth() + 1}`.slice(-2) +
        `0${now.getDate()}`.slice(-2)}2359`

      const IMP = window.IMP
      IMP.init(IAMPORT_KEY)

      IMP.request_pay(
        {
          pg: IMPORT_PG,
          pay_method: paymentMethod,
          merchant_uid,
          name: `${studyTitle}_${studyTime}`,
          amount: price,
          buyer_tel: "010-4242-4242",
          // vbank_due: vbankDue,
          // notice_url: `${API_URL}/payment/notification`,
        },
        rsp => {
          if (rsp.success) {
            console.log("성공")
            setStatus("paid")
          } else {
            alert("결제에 실패하였습니다 다시 시도해주세요")
          }
        }
      )
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // console.log("TCL: formApply -> ex.response", ex.response)
        const { data } = ex.response
        setApiError(data)
      }
    }
  }

  const { values, handleChange, handleSubmit, handleClick, errors } = useForm(
    formApply,
    validate
  )

  return (
    <Layout>
      <PageHeader title="Apply" bgUrl={bgUrl} />
      <Container>
        <PageDetails align="left">
          <SmallTitle>실무 성장의 첫걸음, Study States</SmallTitle>
          <Background>
            <Form onSubmit={event => handleSubmit(event)}>
              <FormGroup>
                <StyledLabel for="studyTitle">스터디 선택</StyledLabel>
                <StyledInput
                  id="studyTitle"
                  name="studyTitle"
                  type="select"
                  onChange={handleChange}
                  value={values.studyTitle || ""}
                >
                  <option hidden>스터디를 선택해주세요</option>
                  {courses.map((course, index) => {
                    const { title } = course.node.frontmatter
                    return (
                      <option value={title} key={index}>
                        {title}
                      </option>
                    )
                  })}
                </StyledInput>
              </FormGroup>
              {values.studyTitle ? (
                <FormGroup>
                  <StyledLabel for="studyTime">시간 선택</StyledLabel>
                  <StyledInput
                    id="studyTime"
                    name="studyTime"
                    type="select"
                    onChange={handleChange}
                    value={values.studyTime || ""}
                  >
                    <option hidden>스터디 시간을 선택해주세요</option>
                    {courses
                      .filter(
                        course =>
                          course.node.frontmatter.title === values.studyTitle
                      )
                      .map((course, index) => {
                        const { info } = course.node.frontmatter
                        const time = `${info.studyTimes.dayOfWeek}_${
                          info.studyTimes.time
                        }`
                        return (
                          <option value={time} key={index}>
                            {time}
                          </option>
                        )
                      })}
                  </StyledInput>
                </FormGroup>
              ) : (
                ""
              )}
              <FormGroup>
                <StyledLabel for="paymentMethod">결제 방법</StyledLabel>
                <StyledInput
                  id="paymentMethod"
                  name="paymentMethod"
                  type="select"
                  onChange={handleChange}
                  value={values.paymentMethod || ""}
                >
                  <option hidden>결제방법을 선택해주세요</option>
                  <option value="card">BC카드 외 다른 카드</option>
                  <option value="bccard">BC카드</option>
                  <option value="vbank">계좌이체</option>
                </StyledInput>
              </FormGroup>
              <FormGroup>
                <StyledLabel for="coupon">쿠폰 코드</StyledLabel>
                <StyledInput
                  id="coupon"
                  autoFocus
                  name="coupon"
                  type="text"
                  onChange={handleChange}
                  value={values.coupon || ""}
                  placeholder="가지고 계신 쿠폰코드를 입력해주세요"
                  // couponValidity={couponInfo.couponValidity}
                  // couponChk={couponInfo.couponChk}
                />
                {errors.coupon && <Message>{errors.coupon}</Message>}
              </FormGroup>
              <FormQuestionLabel>
                스터디 신청과 동시에 스터디스테이츠
                <StyledSpan
                // onClick={this.handlePrivateTermsAndConditions}
                >
                  환불약관, 개인정보취급방침 및 이용약관{" "}
                </StyledSpan>
                에 동의합니다.
              </FormQuestionLabel>
              <ButtonContainer>
                <FormButton
                  type="submit"
                  background={blue}
                  color="#fff"
                  onClick={handleClick}
                  value="신청하기"
                >
                  신청하기
                </FormButton>
              </ButtonContainer>
            </Form>
          </Background>
        </PageDetails>
      </Container>
    </Layout>
  )
}

export default ApplyPage

export const pageQuery = graphql`
  query ApplyPage {
    allMarkdownRemark(
      filter: { frontmatter: { open: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            info {
              studyTimes {
                dayOfWeek
                time
              }
              price
            }
            open
          }
        }
      }
    }
  }
`
