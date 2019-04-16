import React from "react"
import { Container, Form, FormGroup } from "reactstrap"
import styled from "styled-components"

import PageHeader from "../reusable/PageHeader"
import PageDetails from "../reusable/PageDetails"
import PrivateTermsAndConditions from "../reusable/privateTermsAndConditions"
import RefundPolicy from "../reusable/refundPolicy"
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
  Paragraph,
  PageFooter,
  Emphasis,
} from "../styled"

import AddComma from "../../services/addComma"
import { blue } from "../../constants"
import bgUrl from "../../assets/img/apply_bg.jpg"

const StyledGrid = styled(Grid)`
  .view {
    display: flex;
  }
`

const WelcomeMessage = styled(Paragraph)`
  font-size: 1.8rem;
`

const Apply = ({
  loading,
  apiError,
  values,
  errors,
  courses,
  coupon,
  payment,
  status,
  handleChange,
  handleSubmit,
  handleErrors,
  onCouponChange,
  handlePrivateTermsAndConditions,
}) => {
  // let submitBtn
  return (
    <>
      <PageHeader title="Apply" bgUrl={bgUrl} />
      <Container>
        <PageDetails align="left" md={7} sm={10}>
          <SmallTitle>실무 성장의 첫걸음, Study States</SmallTitle>
          <Background>
            {status !== "unpaid" ? (
              <>
                <PageDetails
                  title="PAYMENT"
                  padding="2rem 5rem 0 5rem"
                  md={12}
                  sm={12}
                >
                  <SmallTitle>스터디 신청이 완료되었습니다.</SmallTitle>
                  <WelcomeMessage>
                    <strong>
                      {values.name}님, {values.study_time} {values.study_title}{" "}
                      스터디 신청이 접수되었습니다.
                    </strong>
                  </WelcomeMessage>
                  {payment.pay_method === "vbank" ? (
                    <section>
                      <div>
                        (가상)계좌번호:{" "}
                        <Emphasis>
                          {`${payment.vbank_name} ${payment.vbank_num}`}
                        </Emphasis>{" "}
                      </div>
                      <div>
                        결제 필요금액 :{" "}
                        <Emphasis>{AddComma(payment.paid_amount)}</Emphasis> 원
                      </div>
                      <div>
                        결제 기한 : <Emphasis>{payment.vbank_date}</Emphasis>
                      </div>
                    </section>
                  ) : (
                    <section>
                      <WelcomeMessage>
                        결제금액: {AddComma(payment.paid_amount)} 원 (카드 결제)
                      </WelcomeMessage>
                      <WelcomeMessage>
                        카드승인번호: {payment.apply_num}
                      </WelcomeMessage>
                    </section>
                  )}
                </PageDetails>
                <PageFooter>
                  스터디 안내는 이메일 ( <strong>{values.email}</strong> ) 로
                  나갈 예정입니다.
                  <br />
                  스터디스테이츠 스터디를 신청해주셔서 감사합니다.
                </PageFooter>
              </>
            ) : (
              <>
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
                  {apiError.length !== 0 ? handleErrors(errors) : null}
                  <FormGroup>
                    <StyledLabel for="study_title">스터디 선택</StyledLabel>
                    <StyledInput
                      id="study_title"
                      name="study_title"
                      type="select"
                      onChange={handleChange}
                      value={values.study_title || ""}
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
                    {errors.study_title && (
                      <Message>{errors.study_title}</Message>
                    )}
                  </FormGroup>
                  {values.study_title ? (
                    <FormGroup>
                      <StyledLabel for="study_time">시간 선택</StyledLabel>
                      <StyledInput
                        id="study_time"
                        name="study_time"
                        type="select"
                        onChange={handleChange}
                        value={values.study_time || ""}
                      >
                        <option hidden>스터디 시간을 선택해주세요</option>
                        {courses
                          .filter(
                            course =>
                              course.node.frontmatter.title ===
                              values.study_title
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
                      {errors.study_time && (
                        <Message>{errors.study_time}</Message>
                      )}
                    </FormGroup>
                  ) : (
                    ""
                  )}
                  <FormGroup>
                    <StyledLabel for="pay_method">결제 방법</StyledLabel>
                    <StyledInput
                      id="pay_method"
                      name="pay_method"
                      type="select"
                      onChange={handleChange}
                      value={values.pay_method || ""}
                    >
                      <option hidden>결제방법을 선택해주세요</option>
                      <option value="card">BC카드 외 다른 카드</option>
                      <option value="bccard">BC카드</option>
                      <option value="vbank">계좌이체</option>
                    </StyledInput>
                    {errors.pay_method && (
                      <Message>{errors.pay_method}</Message>
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
                      value={coupon.couponVal || ""}
                      placeholder="가지고 계신 쿠폰코드를 입력해주세요"
                    />
                    {coupon.couponChk && !coupon.couponValidity ? (
                      <Message>* 유효하지 않은 쿠폰입니다</Message>
                    ) : coupon.couponChk && coupon.couponValidity ? (
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
                      value="신청하기"
                      // ref={btn => {
                      //   submitBtn = btn // TODO: submit 후 중복 클릭되지 않도록 처리
                      // }}
                    >
                      신청하기
                    </FormButton>
                  </ButtonContainer>
                </Form>
              </>
            )}
          </Background>
        </PageDetails>
      </Container>
    </>
  )
}

export default Apply
