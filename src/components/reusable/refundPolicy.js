import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5%;
`

const StyledH2 = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
`

const StyledH3 = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`

const StyledH4 = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
`

const StyledP = styled.p`
  font-size: 1rem;
  margin: 0 5%;
`

const StyledTable = styled.table`
  width: 90%;
  border: 1px solid;
  border-collapse: collapse;
  font-size: 1.2rem;
`

const StyledTd = styled.td`
  border: 1px solid;
`

const RefundPolicy = () => (
  <Wrapper>
    <StyledH2>Study States 환불규정</StyledH2>
    <StyledH4 style={{ textAlign: "center" }}>
      * 환불 규정에서 언급하는 서비스 대금은 실제 지불한 금액입니다.
    </StyledH4>
    <StyledTable>
      <tbody>
        <tr>
          <StyledTd>스터디 시작 1일 전까지</StyledTd>
          <StyledTd>서비스 대금 전액 환불</StyledTd>
        </tr>
        <tr>
          <StyledTd>스터디 진행 1/3 경과 전</StyledTd>
          <StyledTd>서비스 대금 2/3 해당액 환불</StyledTd>
        </tr>
        <tr>
          <StyledTd>스터디 진행 1/2 경과 전</StyledTd>
          <StyledTd>서비스 대금 1/2 해당액 환불</StyledTd>
        </tr>
        <tr>
          <StyledTd>스터디 진행 1/2 경과 후</StyledTd>
          <StyledTd>환불하지 않음</StyledTd>
        </tr>
      </tbody>
    </StyledTable>
    <br />
    <StyledP>
      카드결제, 계좌이체, 가상계좌 결제 방법에 대한 환불 수수료를 제외하고
      환불해드립니다.
      <br />
      환불은 환불 요청시 영업일 기준 14일 이내에 처리됩니다.
    </StyledP>
  </Wrapper>
)

export default RefundPolicy
