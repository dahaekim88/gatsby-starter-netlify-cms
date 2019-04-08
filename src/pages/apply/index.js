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

const ApplyPage = ({ data }) => {
  const courses = data.allMarkdownRemark.edges
  const [couponChk, setCouponChk] = useState(false)
  const [couponValidity, setCouponValidity] = useState(false)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])

  const formApply = async () => {
    setLoading(true)

    try {
      const IMP = window.IMP
      IMP.init("imp83932662")

      IMP.request_pay(
        {
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: "ORD20180131-0000011",
          name: "노르웨이 회전 의자",
          amount: 64900,
          buyer_email: "gildong@gmail.com",
          buyer_name: "홍길동",
          buyer_tel: "010-4242-4242",
          buyer_addr: "서울특별시 강남구 신사동",
          buyer_postcode: "01181",
        },
        rsp => {
          if (rsp.success) {
            console.log("성공")
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
                <StyledLabel for="studyType">스터디 선택</StyledLabel>
                <StyledInput
                  id="studyType"
                  name="studyType"
                  type="select"
                  onChange={handleChange}
                  value={values.studyType || ""}
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
              {values.studyType ? (
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
                          course.node.frontmatter.title === values.studyType
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
                  fluid
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
