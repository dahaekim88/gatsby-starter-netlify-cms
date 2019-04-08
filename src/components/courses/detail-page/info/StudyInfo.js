import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Col } from "reactstrap"

import { Grid } from "../../../reusable/styledComponents"

import { sizes, blue, grayBorder } from "../../../../constants"

const SubjectGrid = styled(Grid)`
  margin-bottom: 1.5rem;

  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    padding: 0;
    width: 100%;
  }
`

const Title = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`

const TextStyledCol = styled(Col)`
  padding: 0;
  border: 1px solid ${grayBorder};
  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    border: 0;
  }
`

const SubjectInfoDetail = styled.div`
  background: white;
  padding: 2rem;
`

const SubjectInfoGrid = styled(Col)`
  width: 100%;
  margin-top: 3rem;
  display: flex;
`

const SubjectInfoTitleCol = styled(Col)`
  font-weight: bold;
  font-size: 14px;
`

const SubjectInfoDetailCol = styled(Col)``

const SubjectInfoApply = styled.div`
  background-color: white;
  font-family: Lovelo;
  font-size: 3.2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.span`
  height: 5.5rem;
  width: 30rem;
  margin: 2rem 0;
  background-color: ${blue};
  border-radius: 4px;
  font-family: Lovelo;
  font-size: 1.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: ${sizes.mobile}px) {
    width: 80%;
  }
`

const RedText = styled.p`
  color: #ff3a71;
`

const LinkButton = Button.withComponent(Link)

class StudyInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getElementHeight("applyHeight", this.apply.clientHeight)
  }

  render() {
    const { title, info, partner } = this.props
    // console.log("info: ", info)

    return (
      <div ref={element => (this.apply = element)}>
        <SubjectGrid>
          <TextStyledCol md={9} sm={12} xs={12}>
            <SubjectInfoDetail>
              <Title>{title}</Title>
              <SubjectInfoGrid>
                <SubjectInfoTitleCol md={3} sm={3} xs={3}>
                  일정
                </SubjectInfoTitleCol>
                <SubjectInfoDetailCol md={9} sm={9} xs={9}>
                  <p>{`${info.startDate} - ${info.endDate} (총 ${
                    info.period
                  })`}</p>
                  {!!info.note ? <RedText>{info.note}</RedText> : null}
                </SubjectInfoDetailCol>
              </SubjectInfoGrid>

              <SubjectInfoGrid>
                <SubjectInfoTitleCol md={3} sm={3} xs={3}>
                  시간
                </SubjectInfoTitleCol>
                <SubjectInfoDetailCol md={9} sm={9} xs={9}>
                  <p>{`${info.studyTimes.frequency} ${
                    info.studyTimes.dayOfWeek
                  } ${info.studyTimes.time}`}</p>
                  <p>{`총 ${info.totalMeeting}의 온라인 스터디 진행`}</p>
                </SubjectInfoDetailCol>
              </SubjectInfoGrid>

              <SubjectInfoGrid>
                <SubjectInfoTitleCol md={3} sm={3} xs={3}>
                  파트너
                </SubjectInfoTitleCol>
                <SubjectInfoDetailCol md={9} sm={9} xs={9}>
                  <p>{partner.name}</p>
                  {partner.currentJob !== "" && <p>({partner.currentJob})</p>}
                </SubjectInfoDetailCol>
              </SubjectInfoGrid>

              <SubjectInfoGrid>
                <SubjectInfoTitleCol md={3} sm={3} xs={3}>
                  가격
                </SubjectInfoTitleCol>
                <SubjectInfoDetailCol md={9} sm={9} xs={9}>
                  <p>{info.price / 10000}만원</p>
                </SubjectInfoDetailCol>
              </SubjectInfoGrid>
            </SubjectInfoDetail>

            <SubjectInfoApply>
              <LinkButton
                to="/apply"
                style={{ textDecoration: "none", color: "white" }}
              >
                신청하기
              </LinkButton>
            </SubjectInfoApply>
          </TextStyledCol>
        </SubjectGrid>
      </div>
    )
  }
}

export default StudyInfo
