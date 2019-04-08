import React from "react"
import styled from "styled-components"
import { Col } from "reactstrap"

import { Grid } from "../../../reusable/styledComponents"

import { sizes, grayBorder, whitegray } from "../../../../constants"

const SubjectGrid = styled(Grid)`
  margin-bottom: 1.5rem;
  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    width: 100%;
    padding: 1rem 0;
  }
`

const StyledCol = styled(Col)`
  width: 75%;
  padding: 1.5rem 0;
  border-top: 1px solid ${whitegray};
  border-bottom: 1px solid ${whitegray};
  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    width: 100%;
  }
  @media screen and (max-width: ${sizes.b_tablet}px) {
    width: 90%;
    margin: 0 auto;
  }
`

const SubjectInfoTitleCol = styled(Col)`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 4px 0;
`

const TagContainer = styled.div`
  border: 1px solid ${grayBorder};
  display: inline-block;
  position: relative;
  background-color: #fff;
  padding: 4px 10px;
  margin: 4px;
  line-height: 18px;
  color: #747777;
  text-decoration: none;
  border-radius: 6px;
  font-size: 1.3rem;
`

class Keywords extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getElementHeight("keywordHeight", this.keyword.clientHeight)
  }

  render() {
    const { keywords } = this.props
    // console.log("keywords: ", keywords)

    return (
      <div ref={element => (this.keyword = element)}>
        <SubjectGrid>
          <StyledCol>
            <SubjectInfoTitleCol>#Keywords</SubjectInfoTitleCol>
            <Col>
              {keywords.map(item => (
                <TagContainer>{item.keyword}</TagContainer>
              ))}
            </Col>
          </StyledCol>
        </SubjectGrid>
      </div>
    )
  }
}

export default Keywords
