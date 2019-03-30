import React from "react"
import styled from "styled-components"

import howtoData from "./data/howtoData"
import { sizes, blue } from "../../constants"

const Container = styled.div`
  background: white;
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width: ${sizes.b_tablet}px) {
    width: 100%;
  }
`

const Title = styled.div`
  width: 100%;
  border-top: 1px solid rgb(230, 230, 230);
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 3rem;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  vertical-align: middle;
`

const Tab = styled.div`
  margin-top: 3rem;
`

const TabMenuArea = styled.div`
  float: left;
  width: 30%;
`

const TabMenu = styled.div`
  display: block;
  color: black;
  width: 100%;
  padding: 1.5rem 1rem;
  border: none;
  text-align: left;
  font-weight: bold;
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    font-weight: bold;
    color: ${blue};
  }
  .active {
    font-weight: bold;
    color: ${blue};
  }
`

const TabContentArea = styled.div`
  padding: 1.5rem 1rem;
`

const TabContent = styled.div`
  height: 230px;
  font-size: 1.6rem;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  padding: 1rem;
`

const Description = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  vertical-align: middle;
`

class HowTo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,
    }
  }

  handleClick = e => {
    const clicked = e.currentTarget
    const index = clicked.dataset.index
    const indexNum = parseInt(index, 10)
    this.setState({
      activeTab: indexNum,
    })
  }

  render() {
    const index = this.state.activeTab
    return (
      <Container>
        <Title>스터디는 다음과 같이 진행됩니다.</Title>
        <Tab>
          <TabMenuArea>
            {howtoData.map((item, i) => (
              <TabMenu
                key={i}
                title={item.title}
                data-index={i}
                onClick={this.handleClick}
              >
                <div className={i === index ? "active" : ""}>{item.title}</div>
              </TabMenu>
            ))}
          </TabMenuArea>

          <TabContentArea>
            <TabContent>
              <ImageContainer>
                <img src={howtoData[index].image} alt="howto" />
              </ImageContainer>
              <Description>{howtoData[index].description}</Description>
            </TabContent>
          </TabContentArea>
        </Tab>
      </Container>
    )
  }
}

export default HowTo
