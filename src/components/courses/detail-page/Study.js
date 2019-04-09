import React from "react"
import styled from "styled-components"
import { Col, Container } from "reactstrap"

import StudyInfo from "./info/StudyInfo"
import Keywords from "./info/Keywords"
import StudyLeftDetails from "./details/StudyLeftDetails"
import { Grid } from "../../styled"

import { sizes, darkwhite } from "../../../constants"

const DarkBackground = styled.div`
  background: ${darkwhite};
`

const StyleGrid = styled(Grid)``

const StudyCol = styled(Col)`
  padding: 0;
  margin-right: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${sizes.b_tablet}px) and (max-width: ${sizes.b_desktop_s}px) {
    padding: 0;
  }
`

const ApplyCol = styled(Col)`
  position: fixed;
  top: 72px;
  right: 1px;
  padding: 0;
  @media screen and (min-width: ${sizes.b_tablet}px) {
    padding: 0;
  }
  @media screen and (max-width: ${sizes.b_desktop_s}px) {
    padding: 0;
    position: relative;
    top: unset;
    right: unset;
  }
`

class Study extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    position: "fixed",
    top: "72px",
    bottom: "unset",
    containerHeight: 0,
    applyHeight: 0,
    keywordHeight: 0,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)

    this.setState({
      containerHeight: this.container.clientHeight,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  getElementHeight = (state, height) => {
    this.setState({
      [state]: height,
    })
  }

  handleScroll = () => {
    const { containerHeight, applyHeight, keywordHeight } = this.state
    const offset = containerHeight - (applyHeight + keywordHeight)

    if (window.innerWidth > sizes.b_desktop_s) {
      if (window.scrollY > offset) {
        this.setState({ top: "unset", bottom: "412px" })
      } else if (window.scrollY < offset) {
        this.setState({ top: "72px", bottom: "unset" })
      }
    } else {
      this.setState({ position: "relative", top: "unset", bottom: "unset" })
    }
  }

  render() {
    const { data } = this.props

    return (
      <DarkBackground ref={element => (this.container = element)}>
        <Container>
          <StyleGrid>
            <StudyCol md={8} sm={12} xs={12}>
              <StudyLeftDetails data={data} />
            </StudyCol>
            <ApplyCol
              style={{ top: this.state.top, bottom: this.state.bottom }}
              md={4}
              sm={12}
              xs={12}
            >
              <StudyInfo
                title={data.title}
                info={data.info}
                partner={data.partner}
                getElementHeight={this.getElementHeight}
              />
              <Keywords
                keywords={data.keywords}
                getElementHeight={this.getElementHeight}
              />
            </ApplyCol>
          </StyleGrid>
        </Container>
      </DarkBackground>
    )
  }
}

export default Study
