import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container, Form, FormGroup } from "reactstrap"
import styled from "styled-components"
import jwtDecode from "jwt-decode"
import axios from "axios"

import Layout from "../../components/Layout"
import PageHeader from "../../components/reusable/PageHeader"
import PageDetails from "../../components/reusable/PageDetails"
import PrivateTermsAndConditions from "../../components/reusable/privateTermsAndConditions"
import RefundPolicy from "../../components/reusable/refundPolicy"
import {
  Grid,
  SmallTitle,
  Background,
  StyledLabel,
  StyledInput,
  FormButton,
  ModalContainer,
  Modal,
  PrivateTermsAndConditionsContainer,
  RefundPolicyContainer,
  FormQuestionLabel,
  StyledSpan,
  ButtonContainer,
  Message,
} from "../../components/styled"

import useForm from "../../components/hooks/useForm"
import validate from "../../services/validate"
import { blue } from "../../constants"
import bgUrl from "../../assets/img/apply_bg.jpg"

import { IAMPORT_KEY } from "../../keys"
import { SERVER_URL, IMPORT_PG } from "../../../.config"

const StyledGrid = styled(Grid)`
  .view {
    display: flex;
  }
`

const ApplyPage = ({ data }) => {
  const courses = data.allMarkdownRemark.edges
  // console.log("courses: ", courses)

  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])
  const [coupon, setCoupon] = useState("")
  const [couponChk, setCouponChk] = useState(false)
  const [couponValidity, setCouponValidity] = useState(false)
  const [discount, setDiscount] = useState(0)
  const [status, setStatus] = useState("unpaid")

  const formApply = async () => {
    setLoading(true)

    const token = localStorage.getItem("token")
    if (token) {
      const { phone } = jwtDecode(token)
      values.phone = phone
    } else {
      alert("로그인 후 스터디 신청이 가능합니다.")
      return
    }

    // console.log("values: ", values)
    const { studyTitle, studyTime, paymentMethod } = values

    const selectedStudy = courses.filter(
      ({ node }) => node.frontmatter.title === studyTitle
    )
    // console.log("selectedStudy: ", selectedStudy)

    const { id, frontmatter } = selectedStudy[0].node
    const { price } = frontmatter.info
    const finalPrice = price - price * discount
    // console.log("finalPrice: ", finalPrice)

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
          amount: finalPrice,
          buyer_tel: values.phone,
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

  const handlePrivateTermsAndConditions = () => {
    document
      .getElementsByClassName("formapplypreextra-modal")[0]
      .classList.toggle("view")
  }

  const onCouponChange = async e => {
    const couponVal = e.target.value

    if (couponVal && couponVal.length > 9) {
      setCoupon(couponVal)
      setCouponChk(true)
      try {
        const couponData = await axios
          .get(`${SERVER_URL}/coupon`, { params: { coupon: couponVal } })
          .then(res => {
            return res.data
          })

        const { couponValidity, discount } = couponData
        setCouponValidity(couponValidity)
        setDiscount(discount)
      } catch (ex) {
        console.log(ex)
      }
    } else {
      setCoupon(couponVal)
      setCouponChk(false)
      setCouponValidity(false)
      setDiscount(0)
    }
  }

  console.log("values: ", values)

  return (
    <Layout>
      <PageHeader title="Apply" bgUrl={bgUrl} />
      <Container>
        <PageDetails align="left">
          <SmallTitle>실무 성장의 첫걸음, Study States</SmallTitle>
          <Background>
            <StyledGrid>
              <ModalContainer
                className="formapplypreextra-modal"
                onClick={e =>
                  e.target.classList.contains("view") &&
                  handlePrivateTermsAndConditions()
                }
              >
                <Modal>
                  <PrivateTermsAndConditionsContainer>
                    <PrivateTermsAndConditions />
                  </PrivateTermsAndConditionsContainer>
                  <RefundPolicyContainer>
                    <RefundPolicy />
                  </RefundPolicyContainer>
                </Modal>
              </ModalContainer>
            </StyledGrid>
            <Form
              onSubmit={event => handleSubmit(event)}
              loading={loading}
              error={
                apiError.length !== 0 || Object.entries(errors).length !== 0
              }
            >
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
                {errors.studyTitle && <Message>{errors.studyTitle}</Message>}
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
                  {errors.studyTime && <Message>{errors.studyTime}</Message>}
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
                {errors.paymentMethod && (
                  <Message>{errors.paymentMethod}</Message>
                )}
              </FormGroup>
              <FormGroup>
                <StyledLabel for="coupon">쿠폰 코드</StyledLabel>
                <StyledInput
                  id="coupon"
                  autoFocus
                  name="coupon"
                  type="text"
                  onChange={onCouponChange}
                  value={coupon || ""}
                  placeholder="가지고 계신 쿠폰코드를 입력해주세요"
                />
                {couponChk && !couponValidity ? (
                  <Message>* 유효하지 않은 쿠폰입니다</Message>
                ) : couponChk && couponValidity ? (
                  <Message style={{ color: "#006400" }}>
                    * 유효한 쿠폰입니다
                  </Message>
                ) : (
                  ""
                )}
              </FormGroup>
              <FormQuestionLabel>
                스터디 신청과 동시에 스터디스테이츠
                <StyledSpan onClick={handlePrivateTermsAndConditions}>
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
